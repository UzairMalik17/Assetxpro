import React from "react";
import ComplianceBody from "../../Shared/ComplianceBody";
import PolicyWrapper from "../../Shared/Wrappers/PolicyWrapper";

function TermsAndCondition() {
  return (
    <ComplianceBody>
      <PolicyWrapper>
        <p className="text-3xl font-extrabold">TERMS AND CONDITIONS</p>
        <p>By clicking “I Agree” Below, I am confirming that:</p>
        <ul className="list-disc pl-8 gap-2">
          <li>
            I have read the following Terms and Conditions, including
            ASSETXPRO’s Policies (including, without limitation, Deposit and
            Withdrawal Policy, Risk Disclaimer and Risk Disclosure Policy,
            Acceptable Use Policy, Privacy and Underage Policy).
          </li>
          <li>
            I understand all such terms and that these Terms and Conditions,
            together with all policies are an inseparable part of a binding
            agreement between me and ASSETXPRO (the “Agreement“).
          </li>
          <li>
            I am over 18 and the information provided in this application is
            true and correct and that I will notify ASSETXPRO of any material
            changes.
          </li>
          <li>
            ASSETXPRO may not be able to ascertain the appropriateness of any
            product to me, including due to lack of experience or undisclosed
            information.
          </li>
          <li>
            I have entered full, accurate and truthful details, including my
            residential address and identity.
          </li>
          <li>
            ASSETXPRO may at any time without limitation amend any of the terms
            set out in this agreement by posting such information on our
            website.
          </li>
        </ul>
        <p>
          I confirm that I got an opportunity to trade on a demo platform and/or
          read a tutorial and I understand as a consequence how to trade and the
          RISKS that are involved. In addition I have read and understood the
          risks that are involved in trading in Forex (“trading“).
        </p>
        <p>
          By filling the Subscription Form I request and agree to open an
          account for myself and confirm that I have read and understood all
          policies and terms including the Risk Disclosure and Terms and
          Conditions.
        </p>
        <div>
          <p className="font-bold">Preamble</p>

          <p>
            ASSETXPRO offers access to its website and services to clients that
            accept the terms and conditions. By using the website you explicitly
            confirm that you have read these Terms and Conditions and agree to
            them.
          </p>
          <p>
            Our obligations are subject to any limits or restrictions which we
            may agree in writing, and any statutory, or market requirements.
          </p>
        </div>
        <div>
          <span>The following terms and conditions apply to all users and</span>
          <span className="font-bold">
            {" "}
            in case you require additional information on any of the subjects
            presented below, feel free to contact our customer support at any
            time.
          </span>
          <span>
            {" "}
            You must first read and then accept these Terms and Conditions in
            order to benefit of the best services provided by ASSETXPRO and the
            agreement is effective upon acceptance.
          </span>
        </div>
        <p>
          If you don’t agree to be bound by the terms and conditions of the
          present agreement, make sure to inform us in writing. If ASSETXPRO
          decides to make any amendments they will be posted online and in order
          to keep trading on the website, you might be asked to accept the new
          terms.
        </p>
        <p>
          In order to be eligible to operate your trading with ASSETXPRO you
          must be over the age of 18 and to fully understand the risks involved.
          You hereby acknowledge that you have the knowledge and experience to
          trade and understand the risks involved. We can’t be held responsible
          for any damage or loss and we are not responsible for verifying
          whether you possess sufficient knowledge or whether your trading
          choices are wise.
        </p>
      </PolicyWrapper>
    </ComplianceBody>
  );
}

export default TermsAndCondition;
