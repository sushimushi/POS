import React from "react";

import PageTitle from "../components/Typography/PageTitle";
import SectionTitle from "../components/Typography/SectionTitle";
import InfoCard from "../components/Cards/InfoCard";
import { Card, CardBody } from "@windmill/react-ui";
import { CartIcon, ChatIcon, MoneyIcon, PeopleIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";

function Subscription() {
  return (
    <>
      <SectionTitle>
        You are currently on the free trial which ends on Jan 17, 2024.
      </SectionTitle>

      <Card className="mb-8 shadow-md">
        <CardBody>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardBody>
                <p className="mb-4 font-semibold text-gray-600 dark:text-gray-300">
                  Revenue
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fuga, cum commodi a omnis numquam quod? Totam exercitationem
                  quos hic ipsam at qui cum numquam, sed amet ratione! Ratione,
                  nihil dolorum.
                </p>
              </CardBody>
            </Card>

            <Card colored className="text-white bg-purple-600">
              <CardBody>
                <p className="mb-4 font-semibold">Colored card</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fuga, cum commodi a omnis numquam quod? Totam exercitationem
                  quos hic ipsam at qui cum numquam, sed amet ratione! Ratione,
                  nihil dolorum.
                </p>
              </CardBody>
            </Card>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Subscription;
