async function main() {
    const TeaNameService = await ethers.getContractFactory("TeaNameService");
    const teaNameService = await TeaNameService.deploy();
    await teaNameService.deployed();
    console.log("TeaNameService deployed to:", teaNameService.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
