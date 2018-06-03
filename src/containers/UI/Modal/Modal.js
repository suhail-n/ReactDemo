import { Jumbotron, Button, OverlayTrigger, Popover, ButtonToolbar } from 'react-bootstrap';
import React from 'react'
const Jumbo = () => {

    const popoverLeft = (
        <Popover id="popover-positioned-left" title="Popover left">
          <strong>Holy guacamole!</strong> Ex nec dicam tibique, eam choro minimum appetere at, no eam labore theophrastus. Ei sit facete saperet patrioque, eos quodsi integre prodesset eu. Vix fastidii mnesarchum ad, vidit perpetua in has. Quis impedit conceptam vis ex, ius eu purto referrentur, vis facer ponderum in. Ex sed scripta forensibus, ad eam dicat commune.
        </Popover>
      );

    return (
        <Jumbotron>
            <h1>Lorem Ipsum</h1>
            <p>
                Lorem ipsum dolor sit amet, possim iracundia ad per, posse paulo sea ad, fastidii facilisi sed id. Sed etiam causae an. Id summo audire epicuri pri. Et pro putant placerat intellegat, dicit noster insolens ei pro. An pro soleat maiorum, modo habeo interesset vim te, nam idque eloquentiam id.
                Sit sonet posidonium te. Qui no sint hinc postulant, vix id integre nostrud forensibus. In nec vitae dolorum molestie, novum molestie ei pri, tritani corrumpit reprimique ad pri. Vis te nulla nostrum antiopam, id mel ferri mundi. Nibh percipitur ne quo, in eos enim etiam vidisse. Id omittam officiis incorrupte vel, dico tota malis eu vis, sit evertitur voluptaria id.

                </p>
            <p>
                <ButtonToolbar style={{ display: 'inline-block' }}>
                    <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>
                        <Button bsStyle="primary">Holy guacamole!</Button>
                    </OverlayTrigger>
                </ButtonToolbar>
            </p>
        </Jumbotron>

    )
}

export default Jumbo;