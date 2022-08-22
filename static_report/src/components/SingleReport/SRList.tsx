import { Main } from '../shared/Main';
import { SRListOverview } from './SRListOverview';
import { ToggleList, type ToggleListView } from '../shared/ToggleList';
import { formatReportTime } from '../../utils/formatters';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { SR_LIST_VIEW } from '../../utils/localStorageKeys';
import { type SingleReportSchema } from '../../sdlc/single-report-schema';

type Props = { data: SingleReportSchema };

export function SingleReportList({ data }: Props) {
  const { created_at, datasource } = data;
  const [view, setView] = useLocalStorage<ToggleListView>(
    SR_LIST_VIEW,
    'summary',
  );

  useDocumentTitle('Report List');

  return (
    <Main isSingleReport time={formatReportTime(created_at)}>
      <ToggleList
        sourceName={datasource.name}
        sourceType={datasource.type}
        currentView={view}
        toggleView={(nextView) => setView(nextView)}
      />

      <SRListOverview data={data} />
    </Main>
  );
}
