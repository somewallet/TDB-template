import { crc32 } from "../../scripts/helpers/crc32";

export const Opcodes = {
    changeOwner: crc32("op::change_owner"),
    deployCollection: crc32("op::deploy_collection"),
    changeCollectionOwner: crc32("op::change_collection_owner"),
    upgradeCollectionCode: crc32("op::upgrade_collection_code"),
    deployNftItem: 1067786911,
    // crc32("op::deploy_nft_item"),
    batchNftDeploy: crc32("op::batch_nft_deploy"),
    withdrawFunds: crc32("op::withdraw_funds"),
    editDappCode: crc32("op::edit_dapp_code")
};