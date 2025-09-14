export class ThirdPartyLogger {
  writeInfo(msg: string): void {
    console.log(`[3rdParty INFO]: ${msg}`);
  }

  writeError(msg: string): void {
    console.error(`[3rdParty ERROR]: ${msg}`);
  }
}
