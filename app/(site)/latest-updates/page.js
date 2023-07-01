import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from "@/bootstrap";
import YearSelector from './YearSelector'
import { getNoticesByYear } from "@/lib/utils";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";

async function LatestUpdatesPage({ searchParams }) {


  let year = 2023
  if (searchParams['y']) {
    year = parseInt(searchParams['y'])
  }

  const notices = await getNoticesByYear(dayjs().year(year).add(1, 'day').format('YYYY-MM-DD'))
  
  return (
    <Container className='py-4'>


      <ListGroup className='gap-3' variant='flush'>
        <ListGroupItem>
          <h4>Latest Updates</h4>
        </ListGroupItem>
        <ListGroupItem>
          <YearSelector />
        </ListGroupItem>
        {
          notices.length > 0 ? notices.map((notice, idx) => (
            <ListGroupItem className='shadow' key={idx}>
              <h5>{dayjs(notice._createdAt).format('DD-MM-YYYY')}</h5>

              <p className='text-wrap'>{notice.description}</p>
              {
                notice.fileURL ?
                  <span>
                    <a className='px-2 fw-bold' href={notice.fileURL} target='_blank'>Download</a>
                    <FontAwesomeIcon icon={faFileArrowDown} />
                  </span>
                  : ""
              }
            </ListGroupItem>

          )) :
            <Row>
              <Col className='d-flex justify-content-center'>
                <h2>No Updates</h2>
              </Col>
            </Row>
        }

      </ListGroup>



    </Container>
  )
}

export default LatestUpdatesPage