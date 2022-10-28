import IonIcon from "@reacticons/ionicons";
import { Content } from "./style";

interface Props {
  title: string;
  subTitle: string;
  iconName: any;
}

const PageTitle = ({ title, subTitle, iconName }: Props) => {
  return (
    <Content>
      <div className="title">
        <IonIcon name={iconName} className="ion-icon settings"></IonIcon>
        <p>{title}</p>
      </div>
      <p className="subtitle">{subTitle}</p>
    </Content>
  );
};

export default PageTitle;
