import { config as baseConfig } from '@lucassodresa/eslint-config/base';
import studio from '@sanity/eslint-config-studio';
/** @type {import("eslint").Linter.Config} */

export default [...baseConfig, ...studio];
