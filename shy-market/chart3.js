import React from 'react';
import { PieChart } from 'nr1';

export default class NewsletterSignups extends React.Component {
    render() {

        return <PieChart accountIds={[4043634]}
        query="SELECT latest(host.process.cpuPercent) as 'CPU %', latest(host.process.threadCount) as 'Threads' FROM Metric FACET processId, processDisplayName WHERE `entityGuid` = 'NDA0MzYzNHxJTkZSQXxOQXwyNjE4NDAzOTQ4NDI0MDI0MTE2' ORDER BY cpuPercent asc LIMIT 100"
        fullWidth
        />;
    }
}