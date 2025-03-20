declare module 'react-plotly.js' {
    import * as Plotly from 'plotly.js-dist-min'; 
    import { PureComponent } from 'react';
  
    interface PlotParams {
      data: Plotly.Data[];
      layout?: Partial<Plotly.Layout>;
      config?: Partial<Plotly.Config>;
      frames?: Plotly.Frame[];
      onInitialized?: (figure: Plotly.Figure, graphDiv: HTMLElement) => void;
      onUpdate?: (figure: Plotly.Figure, graphDiv: HTMLElement) => void;
      onPurge?: (figure: Plotly.Figure, graphDiv: HTMLElement) => void;
      onError?: (err: Error) => void;
      divId?: string;
      className?: string;
      style?: React.CSSProperties;
      useResizeHandler?: boolean;
    }
  
    export default class Plot extends PureComponent<PlotParams> {}
  }