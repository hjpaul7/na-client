<Container>
      <h3>
        <font color="#e33e42">A</font>dd <font color="#e33e42">M</font>eeting
      </h3>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md="3">
            <FormGroup>
              <Label htmlFor="name" />
              <h5>
                <font color="#e33e42">N</font>ame
              </h5>
              
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label htmlFor="day" />
              <h5>
                <font color="#e33e42">D</font>ay
              </h5>
              <Input
                name="day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label htmlFor="location" />
              <h5>
                <font color="#e33e42">L</font>ocation
              </h5>
              <Input
                name="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label htmlFor="time" />
              <h5>
                <font color="#e33e42">T</font>ime
              </h5>
              <Input
                name="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md="3">
            <FormGroup>
              <Label htmlFor="openclosed" />
              <h5>
                <font color="#e33e42">O</font>pen or{" "}
                <font color="#e33e42">C</font>
                losed
              </h5>
              <Input
                name="openclosed"
                value={openclosed}
                onChange={(e) => setOpenClosed(e.target.value)}
              />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Container>

<Input
name="name"
value={name}
onChange={(e) => setName(e.target.value)}
/>