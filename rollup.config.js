import configurePackage from './support/rollup/configure-package';

import core from './packages/core/package.json';
import rendererReact from './packages/renderer-react/package.json';
import simpleTextEditorPlugin from './packages/plugin-simple-text-editor/package.json';
import richTextEditorPlugin from './packages/plugin-rich-text-editor/package.json';
import themeSelectorPlugin from './packages/plugin-theme-selector/package.json';
import jsonSerializerPlugin from  './packages/plugin-json-serializer/package.json';
import topologyDiagramPlugin from  './packages/plugin-topology-diagram/package.json';

const configs = [
  ...configurePackage(core),
  ...configurePackage(rendererReact),
  ...configurePackage(simpleTextEditorPlugin),
  ...configurePackage(richTextEditorPlugin),
  ...configurePackage(themeSelectorPlugin),
  ...configurePackage(jsonSerializerPlugin),
  ...configurePackage(topologyDiagramPlugin)
];

export default configs;
