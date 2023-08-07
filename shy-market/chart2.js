import React from 'react';
import { AreaChart } from 'nr1';

export default class NewsletterSignups extends React.Component {
    render() {

        return <AreaChart accountIds={[4043634]}
        query="SELECT average(host.cpuPercent) AS 'CPU used %' FROM Metric WHERE `entityGuid` = 'NDA0MzYzNHxJTkZSQXxOQXwyNjE4NDAzOTQ4NDI0MDI0MTE2' TIMESERIES auto"
        fullWidth
        />;
    }
}