import Card from "@/components/Card";
import { ServicesProps } from "@/typescript/interfaces/sections";
import { useTranslation } from "next-i18next";
import React, { useMemo } from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { ImDropbox, ImTruck } from "react-icons/im";
import { IoMdConstruct } from "react-icons/io";
import { MdOutlineMoving } from "react-icons/md";
import { RiBuilding2Fill } from "react-icons/ri";

const Services: React.FC<ServicesProps> = ({ data, type }) => {
  const { t } = useTranslation();
  const translatedData = useMemo(
    () =>
      data?.map((item) => ({
        ...item,
        title: t(item.title),
        subtitle: t(item.subtitle),
      })),
    [data, t]
  );
  const generateIcon = (itemTitle: string) => {
    switch (itemTitle) {
      case t("PrimaryT1"):
        return <MdOutlineMoving size={150} color="#f88b06" />;
      case t("PrimaryT2"):
        return <ImTruck size={150} color="#f88b06" />;
      case t("PrimaryT3"):
        return <ImDropbox size={150} color="#f88b06" />;
      case t("SecondaryT1"):
        return <GiReceiveMoney size={150} color="#f88b06" />;
      case t("SecondaryT2"):
        return <RiBuilding2Fill size={150} color="#f88b06" />;
      case t("SecondaryT3"):
        return <IoMdConstruct size={150} color="#f88b06" />;
      default:
        return null;
    }
  };
  return (
    <section id="services">
      <h1>
        {type === "primary" ? t("Primarne delatnosti") : type === "secondary" ? t("Sekundarne delatnosti") : null}
      </h1>
      <div className="cards-container">
        {translatedData &&
          translatedData.map((item, idx) => {
            const icon = generateIcon(item.title);
            return <Card key={idx} title={item.title} subtitle={item.subtitle} icon={icon} />;
          })}
      </div>
    </section>
  );
};

export default Services;
