import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { BaseDemo } from '../common/base-demo';
import { Diagram } from '@blink-mind/renderer-react';
import richTextEditorPlugin from '@blink-mind/plugin-rich-text-editor';
import topologyDiagramPlugin from '@blink-mind/plugin-topology-diagram';

const plugins = [richTextEditorPlugin(),topologyDiagramPlugin()];
export class TopologyDiagramDemo extends BaseDemo {
  renderDiagram() {
    return (
      <Diagram
        model={this.state.model}
        onChange={this.onChange}
        plugins={plugins}
      />
    );
  }
}

storiesOf('topology-diagram-demo', module)
  .add('topology-diagram-demo', () => <TopologyDiagramDemo />)
