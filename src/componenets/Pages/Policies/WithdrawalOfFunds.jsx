import React from "react";
import ComplianceBody from "../../Shared/ComplianceBody";
import PolicyWrapper from "../../Shared/Wrappers/PolicyWrapper";

function WithdrawalOfFunds() {
  return (
    <ComplianceBody>
      <PolicyWrapper>
        <p className="text-3xl font-extrabold">WITHDRAWAL OF FUNDS POLICY</p>
        <p className="font-bold">WITHDRAWAL OF FUNDS POLICY</p>
        <p>
          Refund Policy. In certain exceptional circumstances, AssetxPro may
          refund payments made by credit card. In this case, the funds will be
          refunded to the card that was used for the deposit. The Customer has
          the right to close his/her account at any time he/she wishes to.
        </p>
        <p>
          The AssetXPro will approve the account closure if: a. there are no
          active investments placed; b. there are no investigations underway
          associated with any of the terms of the current Terms of Services. If
          there are no charges applied to the account, the Asset-Pro has to
          close the account by the Customer’s demand. If the account of the
          Customer has been suspended due to the violation of the current Online
          Services Agreement or due to any other abuse detected by the Customer,
          the refund is not provided under any circumstances. The AssetxPro does
          not have to provide any type of the refund in case the loss was caused
          due to any reason either foreseen or unforeseen.
        </p>
        <p>
          A refund request can be made in cases in which the account had been
          deposited into, but no orders were executed by the customer. In this
          case, the same method of payment used for the deposit will be used for
          the refund. The refund will be for the full amount, unless other
          arrangements have been made. Processing of refund requests can take up
          to 6 business days provided that the customer account is fully
          verified, the customer has submitted a withdrawal request (via the
          AssetxProcashier), the funds are still available in the customer`s
          balance and the customer doesn’t have any active bonus agreements that
          prevent him from withdrawing funds (see Chapter 19 of the Online
          Services Agreement) All other requests will be treated as WITHDRAWALS
          and will be processed using those methods and procedures. If you have
          any questions about this Policy do not hesitate to contact us by
          E-mail: support@AssetxPro.com In compliance with anti-money laundering
          regulations, Assetxpro’s allowed to transfer funds only to an account
          bearing your name. AssetxPro may require additional information or
          documentation prior to releasing funds to your account.
        </p>
        <p>
          For all transactions described above the employee shall record the
          transactions in the Company’s cash account ledger and shall file the
          documentation for each transaction recorded after a reference is made
          into the ledger. Customer agrees to also be bound by the
          Bonus/Leverage Policy stated on the site.
        </p>
      </PolicyWrapper>
    </ComplianceBody>
  );
}

export default WithdrawalOfFunds;
