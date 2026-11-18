// SPDX-License-Identifier: MIT
//
// One Day, Six Windows — news-image-20261117 entry.
// The poster itself is entry.png beside this file; this program's only job
// is to place an exact copy at /output/entry.png, twice, byte-identical.
// Node 22, standard library only, no network.

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);
copyFileSync(source, join(outDir, "entry.png"));
