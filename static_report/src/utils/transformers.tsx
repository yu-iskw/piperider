import fill from 'lodash/fill';
import zip from 'lodash/zip';
import { ColumnSchema, Histogram } from '../sdlc/single-report-schema';
import { CRTargetData } from '../types';

/**
 * "Transformers" -- these are your data re-shaping transformations, and doesn't return a formatted value and does not directly get presented in UI. Can be a precursor to "formatters"
 */

export function nestComparisonValueByKey<T>(
  base: any,
  target: any,
): Record<string, { base: T; target: T }> {
  const result = {};

  Object.entries(base).forEach(([key, value]) => {
    if (!result[key]) {
      result[key] = {};
    }
    result[key]['base'] = value;
  });

  Object.entries(target).forEach(([key, value]) => {
    if (!result[key]) {
      result[key] = {};
    }
    result[key]['target'] = value;
  });

  return result;
}

export type CRHistogramDatum = {
  label: string;
  base: number;
  target: number;
};
// for `type` equal to string, datetime
export function transformCRStringDateHistograms({
  base,
  target,
}: CRTargetData<Histogram>): CRHistogramDatum[] {
  // groupby base/target of a found label
  const mapIdxLookup = new Map<string, number>();

  const initial = base.labels.map((label, idx) => {
    mapIdxLookup.set(label, idx);
    return {
      label,
      base: base.counts[idx],
      target: 0,
    };
  });
  const result = target.labels.reduce((accum, label, idx, arr) => {
    const hasLabel = mapIdxLookup.has(label);
    const count = target.counts[idx];

    if (hasLabel) {
      const lookupIdx = mapIdxLookup.get(label);
      accum[lookupIdx].target = count;
      return accum;
    }

    const newLabelItem = { label, base: 0, target: count };
    return [...accum, newLabelItem];
  }, initial);

  return result;
}

type TransSingleDistArgs = { baseCounts: number[]; baseLabels: string[] };
export function transformBaseHistogram({
  baseCounts,
  baseLabels,
}: TransSingleDistArgs): CRHistogramDatum[] {
  const emptyCounts = fill(Array(baseLabels.length), 0);

  const z = zip<string, number>(baseLabels, baseCounts || emptyCounts);
  const m = z.map(([label, base]) => ({
    label,
    base,
    target: 0,
  }));

  return m;
}

export function getColumnDetails(columnData: ColumnSchema) {
  const {
    nulls,
    non_nulls,
    total,
    invalids,
    distinct,
    valids,
    non_duplicates,
    duplicates,
    zero_length,
    negatives,
    zeros,
  } = columnData;

  const hasNoNull = non_nulls === total;

  const validsOfTotal = valids / total;
  const invalidsOfTotal = invalids / total;
  const nullsOfTotal = nulls / total;
  const distinctOfTotal = distinct / valids;
  const duplicatesOfTotal = duplicates / total;
  const nonDuplicatesOfTotal = non_duplicates / total;
  const zeroLengthOfTotal = zero_length / total;
  const negativesOfTotal = negatives / total;
  const zerosOfTotal = zeros / total;
  const totalOfTotal = total / total;

  return {
    negativesOfTotal,
    zerosOfTotal,
    hasNoNull,
    zeroLengthOfTotal,
    distinctOfTotal,
    validsOfTotal,
    invalidsOfTotal,
    nullsOfTotal,
    duplicatesOfTotal,
    nonDuplicatesOfTotal,
    totalOfTotal,
  };
}

export function checkColumnCategorical(columnDatum: ColumnSchema): boolean {
  const { distinct, type } = columnDatum;
  return distinct <= 100 && (type === 'string' || type === 'integer'); //this is arbitrary
}
