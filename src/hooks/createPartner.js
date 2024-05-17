export function createPartners() {
  const contractAddresses =
    process.env.REACT_APP_CONTRACT_ADDRESS_ARRAY.split(",");
  const reqTokens = process.env.REACT_APP_REQUIRED_TOKENS_ARRAY.split(",");
  const partnerLogos = process.env.REACT_APP_PARTNER_IMG.split(",");
  const partnerNames = process.env.REACT_APP_PARTNER_NAMES.split(",");
  const rpcUrl = process.env.REACT_APP_RPC_URL.split(",");
  const partners = [];

  for (
    let i = 0;
    i <
    Math.max(
      contractAddresses.length,
      reqTokens.length,
      partnerLogos.length,
      partnerNames.length,
      rpcUrl.length
    );
    i++
  ) {
    const obj = {
      index: i,
      contractAddress: contractAddresses[i] || "",
      reqToken: reqTokens[i] || "",
      partnerLogo: partnerLogos[i] || "",
      partnerName: partnerNames[i] || "",
      rpcUrl: rpcUrl[i] || "",
    };
    partners.push(obj);
  }

  return partners;
}
