import React from "react";
import ComplianceBody from "../../Shared/ComplianceBody";
import PolicyWrapper from "../../Shared/Wrappers/PolicyWrapper";
function KycPolicy() {
  return (
    <ComplianceBody>
      <PolicyWrapper>
        <p className="text-3xl font-extrabold">KYC POLICY</p>
        <p>
          Know your customer policies have become increasingly important
          worldwide lately, especially among banks and other financial
          institutions, in order to prevent identity theft, money laundering,
          financial fraud and terrorist activity. AssetXPro ™ holds a zero
          tolerance fraud policy, and is taking all measures possible to prevent
          it. Any fraudulent activity will be documented and all related
          accounts to it will be immediately closed. All funds in these accounts
          will be forfeited.
        </p>
        <div>
          <p className="font-bold">Prevention:</p>

          <p>
            Know your customer policies have become increasingly important
            worldwide lately, especially among banks and other financial
            institutions, in order to prevent identity theft, money laundering,
            financial fraud and terrorist activity. AssetXPro ™ holds a zero
            tolerance fraud policy, and is taking all measures possible to
            prevent it. Any fraudulent activity will be documented and all
            related accounts to it will be immediately closed. All funds in
            these accounts will be forfeited.
          </p>
        </div>
        <div>
          <p className="font-bold">
            When you deposit funds we will require the following documents
          </p>

          <p>
            A copy of your valid passport with the signature pageCopies of your
            credit cards, used to make the deposit (front side with only the 4
            last digits visible, back side with the CVV covered)A copy of a
            recent utility bill in your name and addressA signed purchase
            history of your online transactionsIf you have any questions please
            don’t hesitate to contact our customer support
          </p>
        </div>
        <div>
          <p className="font-bold">
            When do I need to provide these documents?
          </p>

          <p>
            We highly appreciate you taking the time to provide us with all the
            necessary documents as soon as you can, in order to avoid any delays
            in processing your transactions. We require the receipt of all the
            necessary documents prior to making any cash transactions to your
            benefit.Some circumstances may require us to request these documents
            before allowing any other activities in your account, such as
            deposits or trades.Please note that if we will not receive the
            required documents on file, your pending withdrawals will be
            cancelled and credited back to your trading account. We will notify
            you on such event via our system.
          </p>
        </div>
        <div>
          <p className="font-bold">
            How do I know my documents are safe with you?
          </p>

          <p>
            AssetXPro ™ holds the security of documentation at highest priority,
            and treats all documents it receives with utmost respect and
            confidentiality. All files we obtain are fully protected using the
            highest level possible of encryption at every step of the review
            process. We thank you for your cooperation in helping us make
            AssetXPro ™ a safer place to trade.
          </p>
        </div>
      </PolicyWrapper>
    </ComplianceBody>
  );
}

export default KycPolicy;
