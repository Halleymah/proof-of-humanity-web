import { Link, SocialIcons } from "@kleros/components";
import { SecuredByKlerosWhite } from "@kleros/icons";
import { useTranslation } from 'react-i18next';
import { Row, Col, Layout } from 'antd';

const { Footer } = Layout;

export default function AppFooter() {
  const { t, i18n } = useTranslation();

  return (
    <Footer className="poh-footer">
      <Row>
        <Col span={8}>
          <Row justify="start">
            <Link variant="navigation" sx={{ fontSize: 1 }} newTab href="https://www.proofofhumanity.id/">
              {t('footer_learn_more')}
            </Link>
          </Row>
        </Col>
        <Col span={8}>
          <Row justify="center">
            <Link sx={{ alignItems: "center", display: "flex" }} newTab href="https://kleros.io">
              <SecuredByKlerosWhite sx={{ width: 200 }} />
            </Link>
          </Row>
        </Col>
        <Col span={8}>
          <Row justify="end">
            <SocialIcons color="#ffffff" />
          </Row>
        </Col>
      </Row>
    </Footer>
  );
}
