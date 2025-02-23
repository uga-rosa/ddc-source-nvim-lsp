export {
  BaseSource,
  type DdcGatherItems,
  type Item,
  type PumHighlight,
} from "https://deno.land/x/ddc_vim@v3.7.2/types.ts";
export { type Denops, fn } from "https://deno.land/x/ddc_vim@v3.7.2/deps.ts";
export type {
  GatherArguments,
  OnCompleteDoneArguments,
  OnInitArguments,
} from "https://deno.land/x/ddc_vim@v3.7.2/base/source.ts";

export { register } from "https://deno.land/x/denops_std@v5.0.1/lambda/mod.ts";
export {
  deadline,
  DeadlineError,
  deferred,
} from "https://deno.land/std@0.192.0/async/mod.ts";

export * as LSP from "npm:vscode-languageserver-types@3.17.3";
