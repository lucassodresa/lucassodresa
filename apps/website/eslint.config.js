import { config as astroConfig } from "@repo/eslint-config/astro";
import studio from '@sanity/eslint-config-studio'
/** @type {import("eslint").Linter.Config} */

export default [...astroConfig, ...studio];
