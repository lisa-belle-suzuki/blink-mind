import * as React from 'react';
import styled from 'styled-components';
import { Controller, Model } from '@blink-mind/core';
import { DragScrollWidget } from './common';
import { RootNodeWidget } from './root-node-widget';

const NodeLayer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export interface MindDragScrollWidgetProps {
  controller: Controller;
  model: Model;
  saveRef?: Function;
  getRef?: Function;
}

export class MindDragScrollWidget<
  P extends MindDragScrollWidgetProps
> extends React.Component<MindDragScrollWidgetProps> {
  constructor(props: MindDragScrollWidgetProps) {
    super(props);
  }

  componentDidMount(): void {
    const { getRef, model } = this.props;
    const rootTopic: HTMLElement = getRef(`topic-${model.editorRootTopicKey}`);
    const nodeLayer: HTMLElement = getRef('node-layer');
    const rootTopicRect = rootTopic.getBoundingClientRect();
    const nodeLayerRect = nodeLayer.getBoundingClientRect();
    this.dragScrollWidget.setViewBoxScrollDelta(
      0,
      rootTopicRect.top -
        nodeLayerRect.top -
        this.dragScrollWidget.viewBox.getBoundingClientRect().height / 2 +
        rootTopicRect.height
    );
  }

  get dragScrollWidget(): DragScrollWidget {
    return this.props.getRef('DragScrollWidget');
  }

  render() {
    const { saveRef, model } = this.props;
    const nodeKey = model.editorRootTopicKey;
    return (
      <DragScrollWidget {...this.state} ref={saveRef('DragScrollWidget')}>
        {(
          setViewBoxScroll: (left: number, top: number) => void,
          setViewBoxScrollDelta: (left: number, top: number) => void
        ) => (
          <NodeLayer ref={saveRef('node-layer')}>
            <RootNodeWidget
              topicKey={nodeKey}
              {...this.props}
              setViewBoxScroll={setViewBoxScroll}
              setViewBoxScrollDelta={setViewBoxScrollDelta}
            />
          </NodeLayer>
        )}
      </DragScrollWidget>
    );
  }
}
