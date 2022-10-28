const fs = require("fs");
const daemonConfig = require("/root/.ceramic/daemon.config.json");

if (!process.env.ADMIN_DIDS) {
  console.log("No Admin dids found");
  process.exit(0);
}

let dids = process.env.ADMIN_DIDS;
dids = dids.split(",");

dids.forEach((did) => {
  if (!daemonConfig["http-api"]["admin-dids"].includes(did)) {
    daemonConfig["http-api"]["admin-dids"].push(did);
  }
});

const daemonConfigJson = JSON.stringify(daemonConfig);

fs.writeFile("/root/.ceramic/daemon.config.json", daemonConfigJson, (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log("Admin dids updated successfully\n");
  }
});
