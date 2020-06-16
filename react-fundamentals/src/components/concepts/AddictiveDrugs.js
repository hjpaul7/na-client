import React, { useState, useEffect } from "react";
import styled from "styled-components";

const AddictiveDrugs = () => {
  const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  `;

  const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-bottom: 50px;
  `;

  const Div = styled.div`
    background-color: #363136;
    opacity: 0.8;
    border-radius: 5px;
    padding-top: 10px;
    padding-left: 10px;
  `;

  const Img = styled.img`
    height: 180px;
  `;
  // const Wrapper = styled.div`
  //   display: block;
  //   margin: auto;
  //   padding: 2em;
  // `;

  const cardStyle = {
    marginLeft: "10px",
    marginRight: "10px",
    float: "left",
    fontSize: "12px",
    color: "black",
    minWidth: "250px",
    // maxWidth: "250px",
    minHeight: "400px",
  };

  const cardFlex = {
    display: "flex",
    flexDirection: "row",
  };
  return (
    <Div>
      <h4>Drug specific information</h4>
      <hr />
      <Row style={cardFlex}>
        <Column>
          <div class="card" style={cardStyle}>
            <Img
              src="https://www.drugabuse.gov/sites/default/files/2020-05/Opioids.jpg"
              class="card-img-top"
              alt="..."
            />

            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h6>Opioids</h6>
              </li>
              <li class="list-group-item">
                Opioids are a class of drugs that include the illegal drug
                heroin, synthetic opioids such as fentanyl, and pain relievers
                available legally by prescription, such as oxycodone
                (OxyContin®), hydrocodone (Vicodin®), codeine, morphine, and
                many others.
              </li>
            </ul>
            <div class="card-body">
              <a
                href="https://www.drugabuse.gov/publications/effective-treatments-opioid-addiction"
                target="_blank"
                class="card-link"
              >
                Treatment
              </a>
              <a
                href="https://www.addictioncenter.com/opiates/"
                target="_blank"
                class="card-link"
              >
                More Info
              </a>
              <a
                href="https://www.cdc.gov/drugoverdose/index.html"
                target="_blank"
                class="card-link"
              >
                Overdosing
              </a>
            </div>
          </div>
        </Column>

        <Column>
          <div class="card" style={cardStyle}>
            <Img
              src="https://www.drugabuse.gov/sites/default/files/heroin_powder.jpg"
              class="card-img-top"
              alt="..."
            />

            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h6>Heroin</h6>
              </li>
              <li class="list-group-item">
                Heroin is an opioid drug made from morphine, a natural substance
                taken from the seed pod of the various opium poppy plants grown
                in Southeast and Southwest Asia, Mexico, and Colombia. Heroin
                can be a white or brown powder, or a black sticky substance
                known as black tar heroin.
              </li>
            </ul>
            <div class="card-body">
              <a
                href="https://www.drugabuse.gov/publications/research-reports/heroin/what-are-treatments-heroin-use-disorder"
                target="_blank"
                class="card-link"
              >
                Treatment
              </a>
              <a
                href="https://www.addictioncenter.com/drugs/heroin/"
                target="_blank"
                class="card-link"
              >
                More Info
              </a>
              <a
                href="https://www.cdc.gov/drugoverdose/opioids/heroin.html"
                target="_blank"
                class="card-link"
              >
                Overdosing
              </a>
            </div>
          </div>
        </Column>

        <Column>
          <div class="card" style={cardStyle}>
            <Img
              src="https://api.time.com/wp-content/uploads/2018/11/crystal-meth.jpg"
              class="card-img-top"
              alt="..."
            />

            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h6>Methamphetamine</h6>
              </li>
              <li class="list-group-item">
                The National Institute on Drug Abuse reports that overdose death
                rates involving methamphetamine have quadrupled from 2011 to
                2017. Frequent meth use is associated with mood disturbances,
                hallucinations, and paranoia.
              </li>
            </ul>
            <div class="card-body">
              <a
                href="https://www.addictioncenter.com/drugs/meth/treatment/"
                target="_blank"
                class="card-link"
              >
                Treatment
              </a>
              <a
                href="https://www.addictioncenter.com/drugs/meth/"
                target="_blank"
                class="card-link"
              >
                More Info
              </a>
              <a
                href="https://drugabuse.com/methamphetamine/overdose/"
                target="_blank"
                class="card-link"
              >
                Overdosing
              </a>
            </div>
          </div>
        </Column>

        <Column>
          <div class="card" style={cardStyle}>
            <Img
              src="https://www.footprintsbeachside.com/wp-content/uploads/2018/05/Cocaine_Money_Black_Background.jpg"
              class="card-img-top"
              alt="..."
            />

            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h6>Cocaine</h6>
              </li>
              <li class="list-group-item">
                In the short term, cocaine use can result in increased blood
                pressure, restlessness, and irritability. In the long term,
                severe medical complications of cocaine use include heart
                attacks, seizures, and abdominal pain.
              </li>
            </ul>
            <div class="card-body">
              <a
                href="https://www.drugabuse.gov/publications/research-reports/cocaine/what-treatments-are-effective-cocaine-abusers"
                target="_blank"
                class="card-link"
              >
                Treatment
              </a>
              <a
                href="https://www.addictioncenter.com/drugs/cocaine/"
                target="_blank"
                class="card-link"
              >
                More Info
              </a>
              <a
                href="https://drugabuse.com/cocaine/overdose/"
                target="_blank"
                class="card-link"
              >
                Overdosing
              </a>
            </div>
          </div>
        </Column>

        <Column>
          <div class="card" style={cardStyle}>
            <Img
              src="https://www.drugabuse.gov/sites/default/files/2020-05/Fentanyl-ALT.jpg"
              class="card-img-top"
              alt="..."
            />

            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h6>Fentanyl</h6>
              </li>
              <li class="list-group-item">
                Fentanyl is a powerful synthetic opioid analgesic that is
                similar to morphine but is 50 to 100 times more potent. It is a
                Schedule II prescription drug, and it is typically used to treat
                patients with severe pain or to manage pain after surgery.
              </li>
            </ul>
            <div class="card-body">
              <a
                href="https://americanaddictioncenters.org/fentanyl-treatment"
                target="_blank"
                class="card-link"
              >
                Treatment
              </a>
              <a
                href="https://www.drugabuse.gov/drug-topics/fentanyl"
                target="_blank"
                class="card-link"
              >
                More Info
              </a>
              <a
                href="https://drugabuse.com/fentanyl/overdose/"
                target="_blank"
                class="card-link"
              >
                Overdosing
              </a>
            </div>
          </div>
        </Column>
        <Column>
          <div class="card" style={cardStyle}>
            <Img
              src="https://www.drugabuse.gov/sites/default/files/2020-04/MDMA%20%28Ecstacy_Molly%29.jpg"
              class="card-img-top"
              alt="..."
            />

            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h6>MDMA</h6>
              </li>
              <li class="list-group-item">
                MDMA is a synthetic drug that alters mood and perception
                (awareness of surrounding objects and conditions). It is
                chemically similar to both stimulants and hallucinogens,
                producing feelings of increased energy, pleasure, emotional
                warmth, and distorted sensory and time perception.
              </li>
            </ul>
            <div class="card-body">
              <a
                href="https://americanaddictioncenters.org/ecstasy-abuse/molly-mdma"
                target="_blank"
                class="card-link"
              >
                Treatment
              </a>
              <a
                href="https://www.drugabuse.gov/publications/drugfacts/mdma-ecstasymolly"
                target="_blank"
                class="card-link"
              >
                More Info
              </a>
              <a
                href="https://drugabuse.com/ecstasy/mdma-overdose/"
                target="_blank"
                class="card-link"
              >
                Overdosing
              </a>
            </div>
          </div>
        </Column>
        <Column>
          <div class="card" style={cardStyle}>
            <Img
              src="https://m5q6c2q5.rocketcdn.me/app/uploads/2014/03/crack-cocaine-small-238x179-1.jpg"
              class="card-img-top"
              alt="..."
            />

            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h6>Crack</h6>
              </li>
              <li class="list-group-item">
                Crack cocaine is a hard, mineral-like substance with an
                off-white tint. Crack is made by mixing baking soda or ammonia
                into the powder form of cocaine. This mixture is then heated
                with a lighter or torch until it heats into the the “rocks”
                known as crack cocaine.
              </li>
            </ul>
            <div class="card-body">
              <a
                href="https://www.addictioncenter.com/drugs/crack-cocaine/treatment/"
                target="_blank"
                class="card-link"
              >
                Treatment
              </a>
              <a
                href="https://www.addictioncenter.com/drugs/crack-cocaine/"
                target="_blank"
                class="card-link"
              >
                More Info
              </a>
              <a
                href="https://drugabuse.com/crack/overdose/"
                target="_blank"
                class="card-link"
              >
                Overdosing
              </a>
            </div>
          </div>
        </Column>

        <Column>
          <div class="card" style={cardStyle}>
            <Img
              src="https://m5q6c2q5.rocketcdn.me/app/uploads/2019/05/PCP-Addiction-300x180.jpeg"
              class="card-img-top"
              alt="..."
            />

            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h6>PCP</h6>
              </li>
              <li class="list-group-item">
                PCP, the common name for Phencyclidine, is a hallucinogenic
                substance that affects the brain in various ways. Popular for
                its ability to cause the user to detach and disassociate from
                their surroundings, it produces a strong feeling of euphoria.
                The drug is known for uncomfortable withdrawal effects,
                producing delusions, irritability, and anxiety when “coming
                down.”
              </li>
            </ul>
            <div class="card-body">
              <a
                href="https://americanaddictioncenters.org/pcp-abuse/how-to-treat-overdose"
                target="_blank"
                class="card-link"
              >
                Treatment
              </a>
              <a
                href="https://www.addictioncenter.com/drugs/hallucinogens/pcp-phencyclidine/"
                target="_blank"
                class="card-link"
              >
                More Info
              </a>
              <a
                href="https://americanaddictioncenters.org/pcp-abuse/how-to-treat-overdose"
                target="_blank"
                class="card-link"
              >
                Overdosing
              </a>
            </div>
          </div>
        </Column>

        <Column>
          <div class="card" style={cardStyle}>
            <Img
              src="https://m5q6c2q5.rocketcdn.me/app/uploads/2020/01/flakka_gravel_zombie_drug-300x192.jpeg"
              class="card-img-top"
              alt="..."
            />

            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h6>Flakka</h6>
              </li>
              <li class="list-group-item">
                {" "}
                Flakka is a synthetic or designer drug. It is typically made
                from a synthetic version of an amphetamine-like stimulant in the
                cathinone class called alpha-PVP. The drug is commonly snorted,
                injected, eaten, smoked, or vaporized in e-cigarettes. The drug
                is typically found in crystal form and is white or pink. People
                with a Flakka addiction are at a great risk for injury and
                death.
              </li>
            </ul>
            <div class="card-body">
              <a
                href="https://drugabuse.com/flakka/"
                target="_blank"
                class="card-link"
              >
                Treatment
              </a>
              <a
                href="https://www.addictioncenter.com/drugs/flakka-addiction-abuse/"
                target="_blank"
                class="card-link"
              >
                More Info
              </a>
              <a href="/" target="_blank" class="card-link">
                Overdosing
              </a>
            </div>
          </div>
        </Column>

        <Column>
          <div class="card" style={cardStyle}>
            <Img
              src="https://m5q6c2q5.rocketcdn.me/app/uploads/2019/05/Understanding-Benzodiazepines.jpg"
              class="card-img-top"
              alt="..."
            />

            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h6>Benzodiazepines</h6>
              </li>
              <li class="list-group-item">
                Benzodiazepines, or “benzos,” are a class of pharmaceutical
                drugs prescribed for a spectrum of mental disorders and
                ailments. They are used to treat moderate to severe anxiety,
                panic attacks, epileptic seizures and even withdrawal symptoms
                from other central nervous system depressants like alcohol.
                Because of their high potential to cause addiction,
                benzodiazepines are generally prescribed for short-term use.
              </li>
            </ul>
            <div class="card-body">
              <a
                href="https://americanaddictioncenters.org/benzodiazepine"
                target="_blank"
                class="card-link"
              >
                Treatment
              </a>
              <a
                href="https://www.addictioncenter.com/benzodiazepines/"
                target="_blank"
                class="card-link"
              >
                More Info
              </a>
              <a
                href="https://drugabuse.com/benzodiazepines/overdose/"
                target="_blank"
                class="card-link"
              >
                Overdosing
              </a>
            </div>
          </div>
        </Column>

        <Column>
          <div class="card" style={cardStyle}>
            <Img
              src="https://m5q6c2q5.rocketcdn.me/app/uploads/2015/02/inhalants-238x179.jpg"
              class="card-img-top"
              alt="..."
            />

            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h6>Inhalants</h6>
              </li>
              <li class="list-group-item">
                Inhalants are volatile, often flammable substances that vaporize
                at room temperature. Inhalants produce short-lived,
                mind-altering effects that can be similar to alcohol’s effects.
                Inhalants encompass a wide variety of chemicals and anesthetics
                categorized together based on their method of administration:
                inhalation. These substances are often referred to as whippets,
                laughing gas, huff or hippie crack.
              </li>
            </ul>
            <div class="card-body">
              <a
                href="https://www.addictioncenter.com/drugs/inhalants/treatment/"
                target="_blank"
                class="card-link"
              >
                Treatment
              </a>
              <a
                href="https://www.addictioncenter.com/drugs/inhalants/"
                target="_blank"
                class="card-link"
              >
                More Info
              </a>
              <a
                href="https://drugabuse.com/inhalants/overdose/"
                target="_blank"
                class="card-link"
              >
                Overdosing
              </a>
            </div>
          </div>
        </Column>

        <Column>
          <div class="card" style={cardStyle}>
            <Img
              src="https://m5q6c2q5.rocketcdn.me/app/uploads/2019/05/Addiction-to-Ketamine.jpg"
              class="card-img-top"
              alt="..."
            />

            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h6>Ketamine</h6>
              </li>
              <li class="list-group-item">
                Even when someone wants to stop using the drug, chemical changes
                in the brain make it nearly impossible to stop without
                professional help. Once an individual crosses into the addicted
                state, they spend their days feeling utterly detached from their
                surroundings, and become incapable of leading a normal,
                productive life.
              </li>
            </ul>
            <div class="card-body">
              <a
                href="https://drugabuse.com/ketamine/how-to-help-an-addict/"
                target="_blank"
                class="card-link"
              >
                Treatment
              </a>
              <a
                href="https://www.addictioncenter.com/drugs/hallucinogens/ketamine/"
                target="_blank"
                class="card-link"
              >
                More Info
              </a>
              <a
                href="https://www.drugs.com/illicit/ketamine.html"
                target="_blank"
                class="card-link"
              >
                Overdosing
              </a>
            </div>
          </div>
        </Column>
      </Row>
    </Div>
  );
};

export default AddictiveDrugs;
