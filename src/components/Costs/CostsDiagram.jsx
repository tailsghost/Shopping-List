import Diagram from '../Diagram/Diagram';
import { newFormatDate } from './Costs';

const CostsDiagram = ({ diagramCosts }) => {
  const diagramDataSet = [
    {
      label: 'Jan',
      value: 0,
    },
    {
      label: 'Feb',
      value: 0,
    },
    {
      label: 'Mar',
      value: 0,
    },
    {
      label: 'Apr',
      value: 0,
    },
    {
      label: 'May',
      value: 0,
    },
    {
      label: 'Jun',
      value: 0,
    },
    {
      label: 'Jul',
      value: 0,
    },
    {
      label: 'Aug',
      value: 0,
    },
    {
      label: 'Sep',
      value: 0,
    },
    {
      label: 'Oct',
      value: 0,
    },
    {
      label: 'Nov',
      value: 0,
    },
    {
      label: 'Dec',
      value: 0,
    },
  ];

  for (const cost of diagramCosts) {
    const data = newFormatDate(cost.date);
    const consMonth = data.getMonth();
    diagramDataSet[consMonth].value += cost.sum;
  }

  return <Diagram dataSets={diagramDataSet} />;
};

export default CostsDiagram;
