interface Config {
  backofficeUrl: string;
}
export const config: Config = {
  backofficeUrl: process.env.backOfficeUrl || "",
};
