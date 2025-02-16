import * as buffer from "jsr:@denops/std@7.4.0/buffer";
import * as fn from "jsr:@denops/std@7.4.0/function";
import * as popup from "jsr:@denops/std@7.4.0/popup";

export async function showui(denops: Denops): Promise<void> {
  const bufnr = await fn.bufadd(denops, "");
  await fn.bufload(denops, bufnr);
  // Write some text to the buffer
  await buffer.replace(denops, bufnr, ["Hello, world!"]);
  //const choice = await denops.call("popup_menu", "Select an option:", ["Option 1", "Option 2", "Option 3"]);
  const pw = await popup.open(denops, {
    bufnr,
    relative: "editor",
    width: 100,
    height: 10,
    row: 1,
    col: 1
  })
  await Promise.resolve();
}

