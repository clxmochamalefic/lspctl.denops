import { Denops } from "jsr:@denops/std@7.4.0";
import { isString } from "jsr:@core/unknownutil@4.3.0";
import { showui } from "./ui.ts";

export async function main(denops: Denops): Promise<void> {
  await denops.cmd(
    `command! -nargs=1 Hello call denops#notify("${denops.name}", "hello", [<f-args>])`,
  );
  await denops.cmd(
    `command! -nargs=0 Showui call denops#notify("${denops.name}", "showlspctl", [])`,
  );

  denops.dispatcher = {
    async hello(arg: unknown): Promise<void> {
      if (isString(arg)) {
        console.log("hello", arg);
      }
      await Promise.resolve();
    },
    async showlspctl(): Promise<void> {
      await showui(denops);
    },
  };
}
