import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { LayoutOne } from "../../layouts";
import { Sidebar, BlogSinglePostVideo } from "../../components/Blog";
import { BreadcrumbOne } from "../../components/Breadcrumb";

const PostVideo = () => {
  return (
    <LayoutOne>
      <div className="blog-content space-pt--r100 space-pb--r100">
        <Container>
          <Row>
            <Col>
              <BlogSinglePostVideo />
            </Col>
          {/*   <Col lg={3} className="mt-4 pt-2 mt-lg-0 pt-lg-0">
              <Sidebar />
            </Col> */}
          </Row>
        </Container>
      </div>
    </LayoutOne>
  );
};

export default PostVideo;
