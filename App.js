import React from 'react';
import logo from './logo.svg';
//import './App.css';
import 'bootstrap';
import './_custom.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    
    <div className="App">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class=""></li>
      <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="2" class=""></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#FFCCCC"></rect></svg>
        <div class="container">
          <div class="carousel-caption text-left">
            <h1> </h1>
            <p></p>
            <p><a class="btn btn-lg btn-primary">Welcome ครับผม</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item active">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#3399FF"></rect></svg>
        <div class="container">
          <div class="carousel-caption">
            <h1> </h1>
            <p> </p>
            <p><a class="btn btn-lg btn-primary" href="#" role="button">Eazy Notebook</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#6699FF"></rect></svg>
        <div class="container">
          <div class="carousel-caption text-right">
            <h1> </h1>
            <p> </p>
            <p><a class="btn btn-lg btn-primary" href="#" role="button"> By Addmins ตัวจี๊ด </a></p>
          </div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
      <Router>
        <nav class="navbar navbar-expand-md navbar-blue bg-dark mb-4">
          <a class="navbar-brand">Eazy Notebook</a>
            <span class="navbar-toggler-icon"></span>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/home">หน้าหลัก</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">อุปกรณ์ Accessories</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/users">ผู้จัดทำ</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/ROV"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/AUG"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/PUBG"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/LOL"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/LOR"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/FIFA"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/GG"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/EZ"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/WP"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/PB"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/RP"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/ED"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/XD"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/ZD"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/AV"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/MV"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/NV"></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/GV"></Link>
              </li>
              
            
            </ul>
            <form class="form-inline mt-2 mt-md-0">
              
              
            </form>
          </div>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
            </Route>
          <Route path="/users">
            <Users />
            </Route>
            <Route path="/ROV">
            <ROV />
            </Route>
            <Route path="/AUG">
            <AUG />
            </Route>
            <Route path="/PUBG">
            <PUBG />
            </Route>
            <Route path="/LOL">
            <LOL />
            </Route>
            <Route path="/LOR">
            <LOR />
            </Route>
            <Route path="/FIFA">
            <FIFA />
            </Route>
            <Route path="/GG">
            <GG />
            </Route>
            <Route path="/EZ">
            <EZ />
            </Route>
            <Route path="/WP">
            <WP />
            </Route>
            <Route path="/PB">
            <PB />
            </Route>
            <Route path="/RP">
            <RP />
            </Route>
            <Route path="/ED">
            <ED />
            </Route>
            <Route path="/XD">
            <XD />
            </Route>
            <Route path="/ZD">
            <ZD />
            </Route>
            <Route path="/AV">
            <AV />
            </Route>
            <Route path="/MV">
            <MV />
            </Route>
            <Route path="/NV">
            <NV />
            </Route>
            <Route path="/GV">
            <GV />
            </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div class="row">
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        
        <img src="https://img.advice.co.th/images_nas/pic_product4/A0132720/A0132720OK_ORI_1.jpg" width="100%" height="225"></img> Notebook Asus TUF FX506LH-HN004T (Bonefire)
    <div class="card-body">
          <p class="card-text"> หน้าจอแสดงผลขนาด 15.6" ระดับ FHD IPS 144Hz
          ระบบประมวลผล Intel Core i5-10300H Processor
          ระบบประมวลผลกราฟิก NVIDIA GeForce GTX 1650 Graphics
          มาพร้อม SSD PCIe NVMe ความจุ 512GB และ RAM DDR4 8GB
          มาพร้อมระบบปฏิบัติการ Windows 10 Home
</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            <a href="/AUG" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
            </div>
            <small class="text-muted">ราคา 27,900</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="https://img.advice.co.th/images_nas/pic_product4/A0131625/A0131625OK_ORI_1.jpg" width="100%" height="250"></img> Notebook Asus TUF FA706IU-H7171T (Black)
   <div class="card-body">
          <p class="card-text">หน้าจอแสดงผลขนาด 17.3" ระดับ FHD IPS 120Hz
          ระบบประมวลผล AMD Ryzen 9 4900HS Processor
          ระบบประมวลผลกราฟิก NVIDIA GeForce GTX 1660 Ti Graphics
          มาพร้อม SSD ความจุ 1TB และ RAM DDR4 16GB
          มาพร้อมระบบปฏิบัติการ Windows 10 Home
</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            <a href="/ROV" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
            </div>
            <small class="text-muted">ราคา 42,900</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="https://img.advice.co.th/images_nas/pic_product4/A0132709/A0132709OK_ORI_1.jpg" width="100%" height="225"></img> Notebook Asus TUF A15 FA506II-HN162TS (Fortress Gray)
    <div class="card-body">
          <p class="card-text">หน้าจอแสดงผลขนาด 15.6" ระดับ FHD IPS 144Hz
          ระบบประมวลผล AMD Ryzen 5 4600H Processor
          ระบบประมวลผลกราฟิก NVIDIA GeForce GTX 1650 Ti Graphics
          มาพร้อม SSD PCIe NVMe ความจุ 512GB และ RAM DDR4 8GB
มาพร้อมระบบปฏิบัติการ Windows 10 Home </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            <a href="/PUBG" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
            </div>
            <small class="text-muted">ราคา 25,900</small>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="https://img.advice.co.th/images_nas/pic_product4/A0132078/A0132078OK_ORI_1.jpg" width="100%" height="225"></img>Notebook Asus ROG Strix G15 GL542LI-HN052T (Electro Punk)
    <div class="card-body">
          <p class="card-text">หน้าจอแสดงผลขนาด 15.6" ระดับ FHD IPS 144Hz
          ระบบประมวลผล Intel Core i7-10750H Processor
          ระบบประมวลผลกราฟิก NVIDIA GeForce GTX 1650 Ti Graphics
          มาพร้อม SSD ความจุ 512GB และ RAM DDR4 8GB
          มาพร้อมระบบปฏิบัติการ Windows 10 Home
</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            <a href="/LOL" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
            </div>
            <small class="text-muted">ราคา 34,900</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="https://img.advice.co.th/images_nas/pic_product4/A0131621/A0131621OK_ORI_1.jpg" width="100%" height="225"></img>Notebook Asus ROG Strix G15 GL542LI-HN053T (Black W/LightBar)
    <div class="card-body">
          <p class="card-text">หน้าจอแสดงผลขนาด 15.6" ระดับ FHD IPS 144Hz
          ระบบประมวลผล Intel Core i5-10300H Processor
          ระบบประมวลผลกราฟิก NVIDIA GeForce GTX 1650 Ti Graphics
          มาพร้อม SSD ความจุ 512GB และ RAM DDR4 8GB
มาพร้อมระบบปฏิบัติการ Windows 10 Home</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            <a href="/LOR" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
            </div>
            <small class="text-muted">ราคา 30,900</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="https://img.advice.co.th/images_nas/pic_product4/A0132161/A0132161OK_ORI_1.jpg" width="100%" height="225"></img>Notebook Asus ROG Zephyrus GA401IH-BM016T (Moonlight White)
    <div class="card-body">
          <p class="card-text">หน้าจอแสดงผลขนาด 14.0" ระดับ FHD IPS
          ระบบประมวลผล AMD Ryzen 5 4600HS Processor
          ระบบประมวลผลกราฟิก NVIDIA GeForce GTX 1650 Graphics
          มาพร้อม SSD ความจุ 512GB และ RAM DDR4 8GB
มาพร้อมระบบปฏิบัติการ Windows 10 Home</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            <a href="/FIFA" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
            </div>
            <small class="text-muted">ราคา 29,900</small>
          </div>
        </div>
      </div>
    </div>

    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="https://img.advice.co.th/images_nas/pic_product4/A0131621/A0131621OK_ORI_1.jpg" width="100%" height="275"></img>Notebook Asus ROG Strix G15 GL542LI-HN053T (Black W/LightBar)
    <div class="card-body">
          <p class="card-text">หน้าจอแสดงผลขนาด 15.6" ระดับ FHD IPS 144Hz
          ระบบประมวลผล Intel Core i5-10300H Processor
          ระบบประมวลผลกราฟิก NVIDIA GeForce GTX 1650 Ti Graphics
          มาพร้อม SSD ความจุ 512GB และ RAM DDR4 8GB
มาพร้อมระบบปฏิบัติการ Windows 10 Home</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            <a href="/GG" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
            </div>
            <small class="text-muted">ราคา 30,900</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="https://img.advice.co.th/images_nas/pic_product4/A0133424/A0133424OK_ORI_1.jpg" width="100%" height="250"></img>Notebook Asus Vivobook S15 S533EA-BQ050TS (Dreamy White) - A0133424
        <div class="card-body">
          <p class="card-text">หน้าจอแสดงผลขนาด 15.6" ระดับ FHD IPS
หน่วยประมวลผล Intel Core i5-1135G7 Processor
หน่วยประมวลผลกราฟิก Intel Iris Xe Graphics (Integrated)
มาพร้อม SSD ความจุ 512GB และ RAM DDR4 8GB
มาพร้อมระบบปฏิบัติการ Windows 10 Home</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            <a href="/EZ" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
            </div>
            <small class="text-muted">ราคา 23,900</small>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card mb-4 shadow-sm">
        <img src="https://img.advice.co.th/images_nas/pic_product4/A0132621/A0132621OK_ORI_1.jpg" width="100%" height="225" ></img>Notebook Asus Zenbook Pro Duo UX581LV-H2014TS (Celestial Blue)
        <div class="card-body">
          <p class="card-text">ScreenPad Plus ช่วยให้คุณทำงานพร้อมกันหลายแอปได้อย่างง่ายดาย
มีปากกา ASUS Pen ให้
หน้าจอแสดงผลขนาด 15.6" ระดับ 4K UHD แบบทัชสกรีน
ระบบประมวลผล Intel Core i9-10980HK Processor
ระบบประมวลผลกราฟิก NVIDIA GeForce RTX 2060 Graphics
มาพร้อม SSD PCIe NVMe ความจุ 1TB และ RAM DDR4 32GB
มาพร้อมระบบปฏิบัติการ Windows 10 Home</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
            <a href="/WP" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
            </div>
            <small class="text-muted">ราคา 109,900</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  


    
  );
}

function About() {
  return <h2><div class="row">
  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img src="https://cf.shopee.co.th/file/472bedae193cbe46aac8006608cc4acb" width="100%" height="225"></img>
  <div class="card-body">
        <p class="card-text">Signo GP-510 SPECTRO RGB GAMING COLING PAD
</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          <a href="/PB" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
          </div>
          <small class="text-muted">ราคา 890</small>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img src="https://www.jib.co.th/img_master/product/original/20180926090043_26206_24_1.png" width="100%" height="190"></img> 
 <div class="card-body">
        <p class="card-text"> N16GB (8GBx2) DDR4/2400 KINGSTON HyperX IMPACT (HX424S14IB2K2/16)
</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          <a href="/RP" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
          </div>
          <small class="text-muted">ราคา 2,390</small>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img src="https://cf.shopee.co.th/file/3f793bba8ea6efd7b9cb548d00aacfa6" width="100%" height="265"></img> Logitech G 102 
  <div class="card-body">
        <p class="card-text"> </p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          <a href="/ED" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
          </div>
          <small class="text-muted">ราคา 790</small>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img src="https://storage.googleapis.com/file-computeandmore/images/f5422ca2-4446-42a9-8731-d94fe9aea1b8.png" width="100%" height="280"></img>LOGA ASURA PRO
  <div class="card-body">
        <p class="card-text">
</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          <a href="/XD" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
          </div>
          <small class="text-muted">ราคา 3,400</small>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img src="https://img.advice.co.th/images_nas/pic_product4/A0132757/A0132757_1.jpg" width="100%" height="240"></img> 
  <div class="card-body">
        <p class="card-text">HEADSET (7.1) RAZER KRAKEN MULTI-PLATFORM</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          <a href="/ZD" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
          </div>
          <small class="text-muted">ราคา 2,990</small>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img src="https://www.envisimple.com/images/product/L/240463111642313109.png" width="100%" height="280"></img> 
  <div class="card-body">
        <p class="card-text">Trust Mico USB Microphone</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          <a href="/AV" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
          </div>
          <small class="text-muted">ราคา 690</small>
        </div>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img src="https://images.samsung.com/is/image/samsung/th-870qvo-mz-77q1t0bw-frontblack-265977037?$PD_GALLERY_L_JPG$" width="100%" height="300"></img>
  <div class="card-body">
        <p class="card-text">SSD 870 QVO SATA III 2.5 inch</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          <a href="/MV" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
          </div>
          <small class="text-muted">ราคา 3,990</small>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img src="https://cf.shopee.co.th/file/8b20c69ac805fc22497297bb5035c911" width="100%" height="300"></img>
      <div class="card-body">
        <p class="card-text">LOGITECH K120 Keyboard</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          <a href="/NV" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
          </div>
          <small class="text-muted">ราคา 370</small>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card mb-4 shadow-sm">
      <img src="https://resource.logitechg.com/w_1800,c_limit,f_auto,q_auto:best,f_auto,dpr_auto/content/dam/gaming/en/products/g502-hero/g502-hero-intro.png?v=1" width="100%" height="260" ></img>
      <div class="card-body">
        <p class="card-text">MOUSE WIRELESS LOGITECH G502</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          <a href="/GV" class="btn btn-sm btn-outline-secondary">ข้อมูลเพิ่มเติม</a>
          </div>
          <small class="text-muted">ราคา 4,900</small>
        </div>
      </div>
    </div>
  </div>
</div></h2>;
}

function ROV() {
  return <h2><div class="col-md-12 bor_bot">
  <div class="row bor_top">
  <div class="col-md-4 col-sm-4 col-xs-6 quest">
  CPU Brand </div>
  <div class="col-md-8 col-sm-8 col-xs-6 answer">
  AMD </div>
  </div>
  <div class="row bor_top">
  <div class="col-md-4 col-sm-4 col-xs-6 quest">
  CPU Model </div>
  <div class="col-md-8 col-sm-8 col-xs-6 answer">
  AMD Ryzen 9 4900H </div>
  </div>
  <div class="row bor_top">
  <div class="col-md-4 col-sm-4 col-xs-6 quest">
  Base Clock </div>
  <div class="col-md-8 col-sm-8 col-xs-6 answer">
  3.30 GHz </div>
  </div>
  <div class="row bor_top">
  <div class="col-md-4 col-sm-4 col-xs-6 quest">
  Boost Clock </div>
  <div class="col-md-8 col-sm-8 col-xs-6 answer">
  4.40 GHz </div>
  </div>
  <div class="row bor_top">
  <div class="col-md-4 col-sm-4 col-xs-6 quest">
  cache </div>
  <div class="col-md-8 col-sm-8 col-xs-6 answer">
  8 MB </div>
  </div>
  </div><div class="panel-heading">
 Graphic </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
graphic Chip </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
NVIDIA GeForce GTX 1660 Ti 6GB GDDR6 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Brand </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
NVIDIA </div>
</div>
</div>
 </div>
</div><div class="panel-heading">
memory </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
16 GB </div>
 </div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
DDR4 </div>
</div>
</div>
</div>
</div><div class="panel-heading">
Storage </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
1 TB </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-M.2 SSD (PCIe/NVMe) </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
 - </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
 HDD 4 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
</div>
</div>
</div></h2>;
}

function Users() {
  return <h2><h3 class="pb-4 mb-4 font-italic border-bottom">ข้อมูลผู้จัดทำ</h3><h2 class="blog-post-title">นักศึกษาระดับประกาศนียบัตรวิชาชีพชั้นสูง</h2><p class="blog-post-meta">มีผู้จัดทำดังนี้</p><p class="blog-post-meta">นายจิรายุทธ พันธุ์ดี ปวส 1/2 </p><p class="blog-post-meta">นายศักดิ์สิทธิ์ คุมแก้ว ปวส 1/2</p></h2>;
}
function AUG() {
  return <h2><div class="panel-heading">
  processor </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
CPU Brand </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
Intel </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
CPU Model </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
Intel Core i5-10300H </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Base Clock </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
2.50 GHz </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Boost Clock </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
4.50 GHz </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
cache </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
8 MB </div>
</div>
</div>
</div>
</div><div class="panel-heading">
Graphic </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
graphic Chip </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
NVIDIA GeForce GTX 1650 4GB GDDR6 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Brand </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
NVIDIA </div>
</div>
</div>
</div>
</div><div class="panel-heading">
memory </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
 <div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
8 GB </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
DDR4 </div>
</div>
</div>
</div>
</div><div class="panel-heading">
Storage </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
512 GB </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-M.2 SSD (PCIe/NVMe) </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0  </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
 <div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
</div>
</div>
</div></h2>;
}
function PUBG() {
  return <h2><div class="panel-heading">
  processor </div><div class="panel-body">
 <div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
CPU Brand </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
AMD </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
CPU Model </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
AMD Ryzen 5 4600H </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Base Clock </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
3.00 GHz </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Boost Clock </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
4.00 GHz </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
cache </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
8 MB </div>
</div>
</div>
</div>
</div><div class="panel-heading">
graphic </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
graphic Chip </div>
 <div class="col-md-8 col-sm-8 col-xs-6 answer">
NVIDIA GeForce GTX 1650 Ti 4GB GDDR6 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Brand </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
NVIDIA </div>
</div>
</div>
</div>
</div><div class="panel-heading">
memory </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
8 GB </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
DDR4 </div>
</div>
</div>
</div>
</div><div class="panel-heading">
Storage </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
512 GB </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
 -M.2 SSD (PCIe/NVMe) </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
 HDD 4 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
</div>
</div>
</div></h2>;
}
function LOL() {
  return <h2><div class="panel-heading">
  processor </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
CPU Brand </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
Intel </div>
</div>
<div class="row bor_top">
 <div class="col-md-4 col-sm-4 col-xs-6 quest">
CPU Model </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
Intel Core i7-10750H </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Base Clock </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
2.60 GHz </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Boost Clock </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
5.00 GHz </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
cache </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
12 MB </div>
</div>
</div>
</div>
</div><div class="panel-heading">
graphic </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
graphic Chip </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
NVIDIA GeForce GTX 1650 Ti 4GB GDDR6 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Brand </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
NVIDIA </div>
</div>
</div>
</div>
</div><div class="panel-heading">
memory </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
8 GB </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
DDR4 </div>
</div>
</div>
</div>
</div><div class="panel-heading">
Storage </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
512 GB </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-M.2 SSD (PCIe/NVMe) </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 RPM  </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
 <div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
</div>
</div>
</div></h2>;
}
function LOR() {
  return <h2><div class="panel-heading">
  processor </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
 CPU Brand </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
Intel </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
CPU Model </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
Intel Core i5-10300H </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Base Clock </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
2.50 GHz </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Boost Clock </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
4.50 GHz </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
cache </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
8 MB </div>
</div>
</div>
</div>
</div><div class="panel-heading">
graphic </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
graphic Chip </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
NVIDIA GeForce GTX 1650 Ti 4GB GDDR6 </div>
</div>
 <div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Brand </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
NVIDIA </div>
</div>
</div>
</div>
</div><div class="panel-heading">
memory </div><div class="panel-body">
<div class="row">
 <div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
8 GB </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
DDR4 </div>
</div>
</div>
</div>
</div><div class="panel-heading">
Storage </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
512 GB </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-M.2 SSD (PCIe/NVMe) </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
 HDD 4 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
</div>
</div>
</div></h2>;
}
function FIFA() {
  return <h2><div class="panel-heading">
  processor </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
CPU Brand  </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
AMD </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
CPU Model </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
AMD Ryzen 5 4600HS </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Base Clock </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
3.00 GHz </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Boost Clock </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
4.00 GHz </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
cache </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
8 MB </div>
</div>
</div>
</div>
</div><div class="panel-heading">
graphic </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
graphic Chip </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
NVIDIA GeForce GTX 1650 4GB GDDR6 </div>
</div>
<div class="row bor_top">
 <div class="col-md-4 col-sm-4 col-xs-6 quest">
Brand </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
NVIDIA </div>
</div>
</div>
</div>
</div><div class="panel-heading">
memory </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
 <div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
8 GB </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
DDR4 </div>
</div>
</div>
</div>
</div><div class="panel-heading">
Storage </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
512 GB </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-M.2 SSD (PCIe/NVMe) </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0  </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 RPM  </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
</div>
</div>
</div></h2>;
}
function GG() {
  return <h2><div class="panel-heading">
  processor </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
CPU Brand </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
Intel </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
CPU Model </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
Intel Core i5-10300H </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Base Clock </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
2.50 GHz </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Boost Clock </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
4.50 GHz </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
cache </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
8 MB </div>
</div>
</div>
</div>
</div><div class="panel-heading">
graphic </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
graphic Chip </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
NVIDIA GeForce GTX 1650 Ti 4GB GDDR6 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Brand </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
NVIDIA </div>
</div>
</div>
</div>
</div><div class="panel-heading">
memory </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
8 GB </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
DDR4 </div>
</div>
</div>
</div>
</div><div class="panel-heading">
Storage </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
512 GB </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-M.2 SSD (PCIe/NVMe) </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
 </div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
</div>
</div>
</div></h2>;
}
function EZ() {
  return <h2><div class="panel-heading">
  processor </div><div class="panel-body">
<div class="row">
 <div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
CPU Brand </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
Intel </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
CPU Model </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
Intel Core i5-1135G7 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Base Clock </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
2.40 GHz </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Boost Clock </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
4.20 GHz </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
cache </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
8 MB </div>
</div>
</div>
</div>
</div><div class="panel-heading">
graphic </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
graphic Chip </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
Intel Iris Xe graphics </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Brand </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
Intel (Integrated) </div>
</div>
</div>
</div>
</div><div class="panel-heading">
memory </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
8 GB </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
DDR4 </div>
</div>
</div>
</div>
</div><div class="panel-heading">
Storage </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
512 GB </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-M.2 SSD (PCIe/NVMe) </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0  </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
</div>
</div>
</div></h2>;
}
function WP() {
  return <h2><div class="panel-heading">
  processor </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
CPU Brand </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
Intel </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
CPU Model </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
Intel Core i9-10980HK </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
 Base Clock </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
2.40 GHz </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Boost Clock </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
5.30 GHz </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
cache </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
16 MB </div>
</div>
</div>
</div>
</div><div class="panel-heading">
graphic </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
graphic Chip </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
NVIDIA GeForce RTX 2060 6GB GDDR6 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
Brand </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
NVIDIA </div>
</div>
</div>
</div>
</div><div class="panel-heading">
memory </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
32 GB </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
ram type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
DDR4 </div>
 </div>
</div>
</div>
</div><div class="panel-heading">
Storage </div><div class="panel-body">
<div class="row">
<div class="col-md-12 bor_bot">
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
1 TB </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 1 Type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-M.2 SSD (PCIe/NVMe) </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 2 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
 -- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 3 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 Capacity </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
0 </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 RPM </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
- </div>
</div>
<div class="row bor_top">
<div class="col-md-4 col-sm-4 col-xs-6 quest">
HDD 4 type </div>
<div class="col-md-8 col-sm-8 col-xs-6 answer">
-- </div>
</div>
</div>
</div>
</div></h2>;
}
function PB() {
  return <h2> <div class="row"><div class="col-md-12 bor_bot"><div class="row bor_top"><div class="col-md-4 col-sm-4 col-xs-6 quest">2 Cooling Fan </div><div class="col-md-8 col-sm-8 col-xs-6 answer">6 Grade Fan Speed </div></div><div class="row bor_top"><div class="col-md-4 col-sm-4 col-xs-6 quest"> 10 Mode Color Backlighting </div><div class="col-md-8 col-sm-8 col-xs-6 answer">2 USB port</div></div><div class="row bor_top"><div class="col-md-4 col-sm-4 col-xs-6 quest"> </div><div class="col-md-8 col-sm-8 col-xs-6 answer"> </div></div><div class="row bor_top"><div class="col-md-4 col-sm-4 col-xs-6 quest"> </div><div class="col-md-8 col-sm-8 col-xs-6 answer"></div></div><div class="row bor_top"><div class="col-md-4 col-sm-4 col-xs-6 quest"></div><div class="col-md-8 col-sm-8 col-xs-6 answer"> </div></div></div></div></h2>;
}
function RP() {
  return <h2><div class="panel-heading head" id="warpdetail">
  Product description </div><div class="panel-heading head" id="warpdetail">
  เลือกใช้โน้ตบุ๊กและอุปกรณ์ขนาดกะทัดรัดของคุณกับประสิทธิภาพที่เหนือกว่าด้วย HyperX® Impact DDR4 SODIMM พร้อมปรับแต่งค่าการทำงานได้อย่างที่คุณต้องการ พัฒนามาโดยเฉพาะสำหรับชิปเซ็ต Intel Series 100 และ 200 ผ่านการทดสอบแล้วว่าสามารถทำงานร่วมกับเมนบอร์ดโดยผู้ผลิตชั้นนำ มีจำหน่ายความจุสูงสุด 64GB ค่าหน่วงเวลาเพียง CL13, CL14 และ CL15 แบนด์วิธหน่วยความจำสูงกว่า ความเร็วสูงสุดคือ 2666MHz1 พร้อมสำหรับการประมวลผลทุกรูปแบบ โอเวอร์คล็อกอัตโนมัติเพื่อให้ได้ประสิทธิภาพสูงสุดและประหยัดพลังงาน ใช้กระแสไฟเพียง 1.2V </div><strong>คุณสมบัติ</strong><div class="panel-body"><div class="row"><div class="col-md-12 bor_bot"><div class="row bor_top"><div class="col-md-4 col-sm-4 col-xs-6 quest">พัฒนาขึ้นมาสำหรับชิปเซ็ต Intel Series 100 และ 200 เพื่อรองรับการใช้งานในอนาคตของคุณ </div><div class="col-md-8 col-sm-8 col-xs-6 answer">โอเวอร์คล็อกอัตโนมัติเพื่อลดความยุ่งยาก </div></div><div class="row bor_top"><div class="col-md-4 col-sm-4 col-xs-6 quest">รองรับโปรไฟล์ XMP ทำให้ปรับแต่งได้ง่าย </div><div class="col-md-8 col-sm-8 col-xs-6 answer">แรงดันมาตรฐานต่ำเพียง 1.2 จึงประหยัดพลังงานมากกว่า</div></div><div class="row bor_top"><div class="col-md-4 col-sm-4 col-xs-6 quest">ฉลากปรับตามอุณหภูมิสีดำโฉบเฉี่ยวพร้อม PCB สีดำ </div><div class="col-md-8 col-sm-8 col-xs-6 answer"></div></div><div class="row bor_top"><div class="col-md-4 col-sm-4 col-xs-6 quest"> </div><div class="col-md-8 col-sm-8 col-xs-6 answer"> </div></div><div class="row bor_top"><div class="col-md-4 col-sm-4 col-xs-6 quest"> </div><div class="col-md-8 col-sm-8 col-xs-6 answer"> </div></div></div></div></div></h2>;
}
function ED() {
  return <h2><div class="panel-heading">
  Specification </div><div class="col-md-4 col-sm-4 col-xs-6 col-xss-12 quest">
Detail </div><div class="panel-heading head" id="warpdetail">ข้อกำหนดด้านเทคนิค </div> <h3>
		</h3><h3>
		ความลื่นไหล</h3><h3>
		สัมประสิทธิ์ไดนามิกของแรงเสียดทาน:* 0.1 μ (k)*</h3><h3>
		สัมประสิทธิ์คงที่ของแรงเสียดทาน:* 0.16 μ (s)*</h3><h3>
		*ผ่านการทดสอบบนโต๊ะทำงานที่ทำจากไม้เคลือบผิว</h3><h3>
		ข้อกำหนดด้านเทคนิค</h3><h3>
		ความละเอียด: 200 – 8,000 dpi</h3><h3>
		สูงสุด การเร่งความเร็ว: >25G*</h3><h3>
		สูงสุด ความเร็ว: >200 ips*</h3></h2>;
}
function XD() {
  return <h2> <div>จุดเด่นสินค้า</div><h3>ส่งสัญญาณได้อย่างรวดเร็วกว่าสวิตช์แมคคานิคคอลทั่วไปสูงถึง 600 เท่า</h3><h3>มีความทนทานมากกว่า 100 ล้านครั้ง เนื่องจากใช้แสงอินฟาเรดส่งสัญญาณแทนการใช้ โลหะกระทบ</h3><h3>น้ำหนักที่พอดี ไม่เบาและหนักเกินไปที่ 55 +- 10 g ทำให้สามารถควบคุมการกดได้อย่างแม่นยำ</h3><h3>ปุ่มหมุนสามารถปรับแสงหรือเสียงได้ทันที และยังมี port usb2.0 บนตัวอีกด้วย สายต่อ usb-c</h3><h3> มีไฟ RGB ในตัว โดยไม่ต้องใช้โปรแกรมใดๆ เพื่อลดความหน่วงของเครื่อง</h3></h2>;
}
function ZD() {
  return <h2><strong>At a glance</strong><ul>
  <li>
  <p>Custom-tuned 50 mm Drivers</p>
  </li>
  <li>
  <p>Cooling Gel-Infused Cushions</p>
  </li>
  <li>
  <p>Retractable Unidirectional Microphone</p>
  </li>
  <li>
  <p>Bauxite Aluminum Frame</p>
  </li>
  <li>
  <p>Thicker Headband Padding</p>
  </li>
  <li>
  <p>Cross-Platform Compatibility</p>
  </li>
  </ul><strong>Headphones</strong><div>
<ul>
<li>
<p>Frequency response: 12 Hz – 28 kHz</p>
</li>
<li>
<p>Impedance: 32 Ω @ 1 kHz</p>
</li>
<li>
<p>Sensitivity (@1 kHz): 109 dB</p>
</li>
<li>
<p>Input power: 30 mW (Max)</p>
</li>
<li>
<p>Drivers: 50 mm, with Neodymium magnets</p>
</li>
<li>
<p>Inner ear cup diameter: 54 mm x 65 mm</p>
</li>
<li>
<p>Connection type: Analog 3.5 mm</p>
</li>
<li>
<p>Cable length: 1.3 m / 4.27 ft.</p>
</li>
<li>
<p>Approx. weight: 322 g / 0.71 lbs</p>
</li>
<li>
<p>Oval ear cushions: Designed for full-ear coverage with cooling gel, perfect for long-wearing comfort</p>
</li>
</ul>
</div><strong>Microphone</strong><ul>
<li>
<p>Frequency response: 100 Hz – 10 kHz</p>
</li>
<li>
<p>Signal-to-noise ratio: &gt; 60 dB</p>
</li>
<li>
<p>Sensitivity (@1 kHz): -45 ± 3 dB</p>
</li>
<li>
<p>Pick-up pattern: Unidirectional ECM boom</p>
</li>
</ul></h2>;
}
function AV() {
  return <h2><strong>MicroPhone Trust Mico USB</strong><li>
  <p>With 3.5mm and USB connections, works with any PC or laptop</p>
  </li><li>
  <p>Cable with 3.5mm plug; free USB adapter included for high quality, distortion-free digital audio</p>
  </li><li>
  <p>For voice recording, singing, gaming and voice chat applications such as Skype and Cortana</p>
  </li><li>
  <p>Adjustable angle</p>
  </li><li>
<p>1,80 m cable</p>
</li> </h2>;
}
function MV() {
  return <h2><strong>MicroPhone Trust Mico USB</strong><li>
  <p>Read 560 MB/s and Write 530 MB/s: &gt; 60 dB</p>
  </li><li>
<p>Form Factor 2.5 Inch: &gt; 60 dB</p>
</li><li>
<p>3 Years Limited Warranty: &gt; 60 dB</p>

</li></h2>;
}
function NV() {
  return <h2><strong>Product Information</strong><li>
  <p>พิมพ์สบายและเงียบ ด้วยปุ่มแบบ low profile ช่วยลดเสียงขณะพิมพ์</p>
  </li><li>
<p>คีย์บอร์ดแบบบาง, ขาพับแข็งแรง, ปุ่มทนทาน กดได้ถึง 10 ล้านครั้ง</p>
</li><li>
<p>ดีไซน์ป้องกันน้ำหก (ของเหลวไหลออกจากคีย์บอร์ดเมื่อน้ำหกใส่)</p>
</li><li>
  <p>พอร์ตเชื่อมต่อ : USB</p>
  </li><li>
  <p>ความยาวสาย : 1.5 เมตร</p>
  </li></h2>;
}
function GV() {
  return <h2><strong>OPTICAL MOUSE LOGITECH (G502) LIGHTSPEED WIRELESS</strong><li>
  <p>Hyper-fast scroll wheel</p>
  </li><li>
<p>POWERPLAY compatible</p>
</li><li>
<p>Onboard memory</p>
</li><li>
<p>LIGHTSYNC RGB: 2 zone</p>
</li><li>
<p>Mechanical Button Tensioning System</p>
</li></h2>;
}

export default App;
