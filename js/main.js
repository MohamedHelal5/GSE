// map initialization
var map = L.map('map').setView([30.033333, 31.233334], 7);
// GIS Companies in egypt
var EsriNA = L.marker([30.02626468661573, 31.459740530656436], {title: 'ESRI'}).addTo(map)
EsriNA.bindPopup(`<h3> Esri North Africa (Esri NA)</h3>
<h4>The Science of Where <h4/>
<p style = "font-size:9px">is the sole Esri distributor serving Egypt, Libya, Sudan, South Sudan and Chad markets. Esri NA, the company is focused on bringing latest GIS technology to its markets, raising geospatial awareness, supporting customers in building effective geospatial strategies, providing Esri products’ certified training and establishing a strong Esri partner network to serve market needs.</p>
<a href="http://www.esri.com" target="_blank">http://www.esri.com</a><br>
<br>${EsriNA.getLatLng()}<br><img style="width:80px;height:80px" src="./img/ersina.jpg">`)

var QSIT = L.marker([30.028055251445934, 31.26735009507425], {draggable : false}).addTo(map)
QSIT.bindPopup(`<h3>Quality Standards for Information Technology (QSIT)</h3> 
<p style = "font-size:9px">was established in 1994. Since then it became a leader of Geospatial Solutions and Services where our services extended to cover all needs of our local market with the first of kind training center for providing specialized GIS training programs, we made GIS easy for all. Our success builds on creative implementations of GIS solutions and services for more than 15 different industries.</p>
<a href="https://qsitint.com/" target="_blank">https://qsitint.com/</a><br>
<br>${QSIT.getLatLng()}<br><img style="width:80px;height:80px" src="./img/qsit.jpg">`)

var pentab = L.marker([30.054427233808436, 31.33501748158145], {draggable : false}).addTo(map)
pentab.bindPopup(`<h3>Penta-b</h3>
<p style = "font-size:9px">is and open source GIS leader in middle-east and Africa specializing in GIS professional services and is the first Arabian GIS vendor. Penta-b drives GIS in Egypt through the professional implementation of free open source GIS products bundled with Penta-b state-of-the-art products (PinPack) delivering exceptional values to the customers.Penta-b is located in Cairo, Egypt, serving MENA, combining teams of GIS professionals with different expertise and skills serving different business areas to help GIS organizations achieve better results.We believe in two main things, Customers satisfaction and Employees satisfaction.Our mission is to always exceed customers expectations by providing high quality services in short time slots with competitive prices, we stick to commitment. Our vision is to become MENA best Employer as we believe that Happy Employee equals Happy Organization and therefore Happy customer, Employees are our asset.</p>
<a href="http://www.penta-b.com" target="_blank">http://www.penta-b.com</a><br>
<br>${pentab.getLatLng()}<br><img style="width:80px;height:80px" src="./img/pentab.jpg">`)

var julfar = L.marker([29.979210985095314, 31.35690931286334], {draggable : false}).addTo(map)
julfar.bindPopup(`<h3>Julfar</h3>
<p style = "font-size:9px"> Consultancy Service implementing integrated solutions using cutting - edge technologies which provide smart services to its clients , individuals and corporate as it is a leading provider of Exporting business solutions and technology services Out side Egypt and support all kind of services (Engineering & infrastructure designs & Reviews , Digital Transformation, IT services, Call Centre, Financial Studies & Consultations ).</p>
<br>${julfar.getLatLng()}<br><img style="width:80px;height:80px" src="./img/julfar.jpg">`)

var vertex = L.marker([29.98965039312837, 31.334824808566452], {draggable : false}).addTo(map)
vertex.bindPopup(`<h3>Vertex</h3>
<p style = "font-size:9px">an Egyptian Company established in 2012 in Cairo.The company has a history of nearly 9 years in the fields of cadastral and Topographic maps, metadata, software and GIS applications.</p>
<br>${vertex.getLatLng()}<br><img style="width:80px;height:80px" src="./img/vertex.jpg">`)

var ajc = L.marker([30.068926283632496, 31.34473297214664], {draggable : false}).addTo(map)
ajc.bindPopup(`<h3>AJC</h3>
<p style = "font-size:9px">GIS & information Technology Services.</p>
<a href="http://www.ajc-consulte.com" target="_blank">http://www.ajc-consulte.com</a><br>
<br>${ajc.getLatLng()}<br><img style="width:80px;height:80px" src="./img/ajc.jpg">`)

var IDSC = L.marker([30.039699932715084, 31.23529363673153], {draggable : false}).addTo(map)
IDSC.bindPopup(`<h3>مركز المعلومات ودعم اتخاذ القرار بمجلس الوزراء - IDSC </h3>
<p style = "font-size:9px">أُنشئ مركز المعلومات ودعم اتخاذ القرار في 15 نوفمبر 1985، ويُعد أحد مراكز الفكر المتميزة في مصر، التي من مهامها الرئيسية دعم متخذ القرار في القضايا الاقتصادية والاجتماعية والسياسية، ويسعى المركز منذ نشأته نحو تناول القضايا ذات الأولوية لدفع جهود الإصلاح المؤثرة على مسار التنمية.
إلى جانب ما تقدم، يسعى المركز إلى تنمية العلاقات مع الوزارات والهيئات الحكومية المختلفة، ويعمل على فتح قنوات للاتصال الجماهيري لقياس اتجاهات المجتمع نحو القضايا القومية، وعلى إتاحة البيانات والمعلومات في إطار كامل من الشفافية والحيادية، مع التركيز على الإتاحة الألكترونية.
وقد أسهم المركز بشكل كبير في بلورة الآراء والمفاهيم التي أثّرت في السياسات الخارجية والداخلية للحكومة المصرية، وذلك من خلال إصدار البحوث المتنوعة في مختلف الموضوعات، ونشر الكتب وأوراق العمل وإعداد الدوريات واستطلاعات الرأي، إلى جانب عقد الندوات والمؤتمرات وورش العمل وتنظيم برامج التدريب.</p>
<a href="http://www.idsc.gov.eg" target="_blank">http://www.idsc.gov.eg/</a><br>
<br>${IDSC.getLatLng()}<br><img style="width:80px;height:80px" src="./img/idsc.jpg">`)

var dar = L.marker([30.074739064437907, 31.02409242722996], {draggable : false}).addTo(map)
dar.bindPopup(`<h3>Dar</h3>
<p style = "font-size:9px">Dar is a privately-owned international multidisciplinary consulting organization in engineering, architecture, planning, environment, project and construction management, facilities management, and economics, founded in 1956. Its principal design head offices and technical support facilities are located in Beirut, Lebanon; Cairo, Egypt; London, United Kingdom; Pune, India; and Amman, Jordan. These principal centers are complemented by a network of 47 permanent local branch offices located throughout the Middle East, Africa, Asia and Europe.</p>
<a href="https://dar.com/" target="_blank">https://dar.com/</a><br>
<br>${dar.getLatLng()}<br><img style="width:80px;height:80px" src="./img/dar.jpg">`)

var taqa = L.marker([29.96746291965411, 31.278862534129598], {draggable : false}).addTo(map)
taqa.bindPopup(`<h3>TAQA Arabia</h3>
<p style = "font-size:9px">TAQA Arabia is the largest private sector energy distribution company in Egypt with over 25 years of experience , investing and operating Energy infrastructure including gas transmission and distribution, Conventional and Renewable Power generation & distribution and marketing of petroleum products and lubricants. TAQA Arabia has recently penetrated the Utility and water treatment markets by establishing TAQA Water, a company focused for utilities and water desalination and filtration.Incorporated in Egypt, TAQA Arabia has successfully grown from a local service provider to a full-power regional energy and utility competitor operating in several Middle East & Africa.With a total investment of more than 1.2 billion EGP, TAQA Arabia is a strong life partner present in the day-to-day activities of more than 1.7 Million customers to which the group provides services through its 4 operating Arms; TAQA GAS, TAQA POWER, TAQA Oil Marketing and TAQA Water.</p>
<a href="http://www.taqa.com.eg" target="_blank">http://www.taqa.com.eg</a><br>
<br>${taqa.getLatLng()}<br><img style="width:80px;height:80px" src="./img/taqa.jpg">`)

var MaxAB = L.marker([29.964984893374254, 31.26429148341494], {draggable : false}).addTo(map)
MaxAB.bindPopup(`<h3>MaxAB</h3>
<p style = "font-size:9px"> is a B2B e-commerce platform that connects food and grocery retailers to suppliers in the most under-served geographies. We are Re-engineering the informal grocery and food market using empowering technologies and innovative supply chains that is designed to fit the needs of retailers in the areas we serve. We are on a mission to empower the retailers, by availing access to a wide range of products, premium service and operational support. Our technology enabled supply chain is helping put the correct amount of food at the right place at the right time.</p>
<a href="http://maxab.io" target="_blank">http://maxab.io</a><br>
<br>${MaxAB.getLatLng()}<br><img style="width:80px;height:80px" src="./img/maxab.jpg">`)

var Spectrum = L.marker([29.98937745737755, 31.334805304601673], {draggable : false}).addTo(map)
Spectrum.bindPopup(`<h3>Spectrum</h3>
<p style = "font-size:9px">Spectrum for Information Systems; Is an Egyptian shareholding company with main premises in Cairo. The Company has been founded by a proficient group of Information Technology skilled software engineers whose expertise is acknowledged throughout the IT Industry.We choose the name “Spectrum” to identify that we provide several IT solutions & services targeting the public and private sectors; to cover wide business needs with main focus on geospatial data and content management.</p>
<a href="http://sys-spectrum.com/index.html" target="_blank">http://sys-spectrum.com/index.html></a><br>
<br>${Spectrum.getLatLng()}<br><img style="width:80px;height:80px" src="./img/spectrum.jpg">`)

var egyptGas = L.marker([30.08345483830412, 31.350482600714347], {draggable : false}).addTo(map)
egyptGas.bindPopup(`<h3>Egypt Gas</h3>
<p style = "font-size:9px">Since its inception in 1983, as an Egyptian Governmental Corporation, Egypt Gas Co. has been one of the major operating corporations in the Petroleum Sector and one of the pioneer companies that solely formed, for decades, the shape of Natural Gas field through the establishment of the giant Egyptian Natural Gas Distribution Network.Yet Egypt Gasة’ operations are not only restricted on Egyptian concession areas, as Egypt Gas contributed in settling the foundation of many of the Gas-based regional projects in the Middle East and placed the keystone of several major operations in the field of Oil & Gas.With more than 6000 employees and 34 Customer Service Centers, covering more than 4 Million Residential, Commercial and Industrial Customers, all over Egypt in addition to our vast experience in the field of EPC-based projects that vary from Onshore/Offshore Platforms Services to national construction projects.</p>
<a href="http://www.egyptgas.com.eg/" target="_blank">http://www.egyptgas.com.eg/></a><br>
<br>${egyptGas.getLatLng()}<br><img style="width:80px;height:80px" src="./img/egyptgas.jpg">`)

var HERE = L.marker([30.016807322092927, 31.421579271760507], {draggable : false}).addTo(map)
HERE.bindPopup(`<h3>HERE Technologies</h3>
<p style = "font-size:9px">As global mobility becomes increasingly connected, electrified and automated, HERE Technologies is leading the way to a safer, greener future Our location platform is integrated into more than 160 million vehicles across the planet, using fresh and accurate data that we have been building for over 35 years and continue to refresh daily. Our experience in mapmaking has made HERE one of the leading innovators in location technology and spatial intelligence. In our key markets, Automated and Connected Driving, Fleet Management and Supply Chain, we work with global brands, partners, developers, and customers so that together we can move the world forward. Armed with critical location data and technology tools, we are developing solutions that solve the biggest challenges that face us today and help us plan for a better future.</p>
<a href="http://here.com" target="_blank">http://here.com</a><br>
<br>${HERE.getLatLng()}<br><img style="width:80px;height:80px" src="./img/here.jpg">`)

var CAPMAS = L.marker([30.05274285053942, 31.24312984060987], {draggable : false}).addTo(map)
CAPMAS.bindPopup(`<h3>الجهاز المركزى للتعبئة العامة والإحصاء (مصر)</h3>
<p style = "font-size:9px">هو الجهاز الرسمي للإحصاء في مصر ويتبع وزير التخطيط والتنمية الاقتصادية. يقوم الجهاز بجمع ومعالجة وتحليل ونشر كل البيانات الإحصائية والتعداد السكاني.</p>
<a href="https://www.capmas.gov.eg/" target="_blank">https://www.capmas.gov.eg/></a><br>
<br>${CAPMAS.getLatLng()}<br><img style="width:80px;height:80px" src="./img/CAPMAS.jpg">`)

var Rashideen = L.marker([29.97753459556394, 31.407632799729562], {draggable : false}).addTo(map)
Rashideen.bindPopup(`<h3>Rashideen Egypt for Trade Co. (RETC)</h3>
<p style = "font-size:9px">is one of the largest companies operating in the field of FMCG in Egypt. Also we are part of a regional group, having its headquarters in U.A.E, having diversified interests in the fields of the oil & gas, mega real estate development projects and several other industries. Company has branches throughout North Africa and Middle East.</p>
<br>${Rashideen.getLatLng()}<br><img style="width:80px;height:80px" src="./img/Rashideen.jpg">`)

var GIZ = L.marker([30.056097892068056, 31.220620766240113], {draggable : false}).addTo(map)
GIZ.bindPopup(`<h3>GIZ Egypt</h3>
<p style = "font-size:9px">Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH is a service provider in the field of international cooperation for sustainable development. Operating in Egypt since 1956, GIZ provides technical expertise, develops capacities, and delivers effective solutions in close partnership with local governmental and non-governmental organizations. GIZ supports Egypt in its efforts to achieve the Sustainable Development Strategy: Egypt Vision 2030 to create better social and economic prospects for the Egyptian people.On behalf of the German Government, the European Union, and other parties, GIZ implements projects in all parts of Egypt in the following areas of cooperation: Energy, Water, Urban Development, Sustainable Economic Development and Governance.</p>
<a href="http://www.giz.de/egypt" target="_blank">http://www.giz.de/egypt></a><br>
<br>${GIZ.getLatLng()}<br><img style="width:80px;height:80px" src="./img/giz.jpg">`)

var Geomatex = L.marker([29.973253995070888, 31.288379851517792], {draggable : false}).addTo(map)
Geomatex.bindPopup(`<h3>Geomatex</h3>
<p style = "font-size:9px">Geomatex is the first & only regional system integrator focusing in Geo-Artificial Intelligence to deliver future innovation to Egyptian  Market.We integrate digital technologies across the design-build-operate lifecycle to improve the management of assets. Tools such as automated As-Built modeling software, drones for surveying and inspection, and virtual and augmented reality are changing how we deliver projects to our clients.Geomatex profile is focused on Geo related business  approaching the market via both sales and service offering the fields of:
UAV Remote Sensing
Thermal inspection
Laser Scanning, 
3D modeling
Drones surveillance Applications
Geo Radar and Seismic applications in addition to 
Hyperspectral imaging studies
Space Applications, serving the newly established Egyptian Space Authority for launching two Egyptian satellites in 2017 and 2018, we had been successfully awarded an order for delivery of components of the ground control station.</p>
<a href="http://Geomatex.com" target="_blank">http://Geomatex.com/</a><br>
<br>${Geomatex.getLatLng()}<br><img style="width:80px;height:80px" src="./img/geomatex.jpg">`)

var TransportforCairo = L.marker([29.966155216578684, 31.25042377144601], {draggable : false}).addTo(map)
TransportforCairo.bindPopup(`<h3> Transport for Cairo</h3>
<p style = "font-size:9px">Transport for Cairo (TfC) is a strategic advisory practice in the domain of sustainable urban mobility.</p>
<a href="https://transportforcairo.com/" target="_blank">https://transportforcairo.com/</a><br>
<br>${TransportforCairo.getLatLng()}<br><img style="width:80px;height:80px" src="./img/TransportforCairo.jpg">`)

var GeoSol = L.marker([29.97901181866702, 31.2853679128633], {draggable : false}).addTo(map)
GeoSol.bindPopup(`<h3>GeoSol-Egypt</h3>
<p style = "font-size:9px">Geomarketing and Mapping Solutions Provider with the vision of revolutionizing location analytics.Its Main objective is to provide leading GIS, GPS, Mapping Solutions and Geomarketing services.</p>
<a href="http://www.geosol-eg.com" target="_blank">http://www.geosol-eg.com</a><br>
<br>${GeoSol.getLatLng()}<br><img style="width:80px;height:80px" src="./img/GeoSol.jpg">`)

var DigitalEgypt = L.marker([30.068002614073993, 31.349279131706357], {draggable : false}).addTo(map)
DigitalEgypt.bindPopup(`<h3>Digital Egypt</h3>
<p style = "font-size:9px">Digital Egypt is a local registered Egyptian Company that provides Egypt’s first Information Portal powered by GIS (Geographical Information Systems) for location information, search and find, real estate and property sales. and business advertising. Digital Egypt is a Sister Company of ZAS Air and Z-Tours.</p>
<a href="http://www.digitaleg.com/" target="_blank">http://www.digitaleg.com/</a><br>
<br>${DigitalEgypt.getLatLng()}<br><img style="width:80px;height:80px" src="./img/digitalegypt.jpg">`)

var Narss = L.marker([30.129490790337588, 31.38179583066099], {draggable : false}).addTo(map)
Narss.bindPopup(`<h3>NARSS</h3>
<p style = "font-size:9px"> is the pioneering Egyptian institution in the field of satellite remote sensing. NARSS is an outgrowth of a Remote Sensing Center, established in 1971 as an American-Egyptian joint project that was affiliated to the Egyptian Academy of Scientific Research and Technology. In 1994 the Authority was established as an organization under the State Ministry of Scientific Research to promote the use of state of the art space technology for the development of the country and introducing High Tech capabilities in regional planning and other applications. NARSS includes two major sectors: Remote Sensing and Space Sciences. The sector of remote sensing works on the use of data provided by earth observation satellites and various airborne sensors to produce maps and spatial data for the evaluation and monitoring of natural resources, natural hazards and management environmental. The sector of space sciences is concerned with the development of sensors for earth observation to be mounted on satellites and with all the problems involved with monitoring communication with satellites and retrieving the information for processing, and ultimately on launching an Egyptian remote sensing satellite.</p>
<a href="http://www.narss.sci.eg" target="_blank">http://www.narss.sci.eg</a><br>
<br>${Narss.getLatLng()}<br><img style="width:80px;height:80px" src="./img/Narss.jpg">`)

var Namaa = L.marker([30.00194843114361, 31.176505353968647], {draggable : false}).addTo(map)
Namaa.bindPopup(`<h3>Namaa</h3>
<p style = "font-size:9px">At Namaa Consult, we follow the concept of having knowledge and experience as fundamental ingredients for any engineering task. While experience without knowledge is like a structure without foundation, knowledge without experience is like a foundation without a structure, the former is fatal and the latter is useless. Therefore we innovatively integrate knowledge and experience though planning, specialization and total quality with the individual key performance indicators towards limits of service exclusiveness.</p>
<a href="http://www.namaaconsult.com/" target="_blank">http://www.namaaconsult.com/</a><br>
<br>${Namaa.getLatLng()}<br><img style="width:80px;height:80px" src="./img/Namaa.jpg">`)

var GIG = L.marker([29.960783874651458, 31.296981336175772], {draggable : false}).addTo(map)
GIG.bindPopup(`<h3> GIG | Globe Imagine for Geoinformatics</h3>
<p style = "font-size:9px">GIG is a #Geospatial solutions and satellite imageries data provider company specialized and mainly concerned in providing innovative GIS solutions and online mapping and field management services including #GIS, #RS, #AR and #BI. GIG is the authorized reseller for:- #Geolantis, and - #vGIS</p>
<a href="http://globeimagine.com/" target="_blank">http://globeimagine.com/</a><br>
<br>${GIG.getLatLng()}<br><img style="width:80px;height:80px" src="./img/gig.jpg">`)

var Cartologic = L.marker([30.03701614623587, 30.95935486208921], {draggable : false}).addTo(map)
Cartologic.bindPopup(`<h3> Cartologic </h3>
<p style = "font-size:9px">We are experts in OGC Standard Compliant Web Mapping and Spatial Data Infrastructure Development. We developed cartoview www.cartoview.net a powerful opensource geographic content management web experience based on GeoNode. 
We are a group of very passionate Mobile and Web Developers with a big passion for geospatial Apps.
Cartologic has clients from around the world in public sector governments, private sector companies and NGOs. We are proud to have served such a diverse group over the years.Working with the latest Google, Microsoft, ESRI and open-source tools, our team is creating the next generation of integrated spatial and 3D applications. The result is taking spatial technologies to the next level offering more functionality, stability and richer user experience this result is achieved by combining proprietary and open source components into innovative and cost-effective solutions to our clients' problems.</p>
<a href="http://www.cartologic.com" target="_blank">http://www.cartologic.com</a><br>
<br>${Cartologic.getLatLng()}<br><img style="width:80px;height:80px" src="./img/cartologic.jpg">`)

var Elsewedy = L.marker([30.029744524166244, 31.463652810415926], {draggable : false}).addTo(map)
Elsewedy.bindPopup(`<h3>Elsewedy Electric</h3>
<p style = "font-size:9px">Elsewedy Electric is a global provider of energy, digital and infrastructure solutions, generating revenues of approximately 3 Billion USD annually.We operate in five key business sectors: Wire & Cable, Electrical Products, Engineering & Construction, Smart Infrastructure, and Infrastructure Investments. At the heart of our approach is an all-in-one integrated Engineering, Procurement & Construction (EPC) service which enables us to deliver even the most complex projects on time and within budget.
We are pioneers of energy management and efficiency. As part of our commitment to sustainability we have established green energy and smart metering projects across Africa, the Middle East and Eastern Europe. A vital part of our mission is ensuring that the communities where we operate develop and flourish.With our offices in 14 different countries around the world and exporting our wide range of high quality and safe products to more than 110 countries worldwide. we make our collective knowledge, experience and global network available to our clients.  OR we deliver efficient integrated energy solutions provided with exceptional expertise and service to our customers and communities, safely and efficiently.</p>
<a href="https://elsewedyelectric.com" target="_blank">https://elsewedyelectric.com</a><br>
<br>${Elsewedy.getLatLng()}<br><img style="width:80px;height:80px" src="./img/Elsewedy.jpg">`)

var fawry = L.marker([30.078603838215322, 31.020483083868143], {draggable : false}).addTo(map)
fawry.bindPopup(`<h3>Fawry</h3>
<p style = "font-size:9px">Fawry for Banking Technology and Electronic Payments S.A.E. is the leading Egyptian digital transformation & fintech platform that revolutionized the concept of Omni channel payment in Africa and the Middle East over the past decade.
· Fawry offers more than 1,186 financial services to consumers and businesses through more than 225 thousand locations in an easy way to pay bills and other services in multiple channels (online, using ATMs , mobile wallets and retail points).Fawry is the chosen platform for over 29.3 Million customers in Egypt. More than 3.06 Million operations daily are processed on Fawry's network, the rapid market penetration and consistent quality of service helped Fawry's transaction volume soar to a remarkable 81 Billion-EGP record in less than 11 years Since its launch.</p>
<a href="http://fawry.com" target="_blank">http://fawry.com</a><br>
<br>${fawry.getLatLng()}<br><img style="width:80px;height:80px" src="./img/fawry.jpg">`)

var geoPro = L.marker([30.057418526793445, 31.350924023910792], {draggable : false}).addTo(map)
geoPro.bindPopup(`<h3>GeoPro</h3>
<p style = "font-size:9px">Geopro Is a full service Geographic Information System (GIS) consulting firm established in 2017.
-GeoPro provides GIS solutions and services to  local and international clients.
-GeoPro corporate headquarter is located in Naser City, Cairo, Egypt.
-GeoPro staff includes PMP certified Project Managers, GIS Application Developers, GIS Specialists and Surveyors.
-Geodatabase design and application development is the foundation of our information systems consultation and technical services. Our Senior Developers have extensive experience in designing and developing a full range of ArcSDE databases and related applications with varying size, complexity, and environment. The associated applications include stand alon solutions, mobile applications, and web-enabled interfaces.
-GeoPro is specialized in designing, developing, and deploying Enterprise GIS solutions for our clients.</p>
<a href="https://geopro.org/" target="_blank">https://geopro.org/</a><br>
<br>${geoPro.getLatLng()}<br><img style="width:80px;height:80px" src="./img/geopro.jpg">`)

var Applogica = L.marker([30.081932730051435, 31.335355515143632], {draggable : false}).addTo(map)
Applogica.bindPopup(`<h3>Applogica</h3>
<p style = "font-size:9px">AppLogica is a team powered by talented experts. Our team has many years of experience working around the world, and we have an outstanding track record helping Enterprises amplify their goals.We understand the challenges faced by top and middle management in a different businesses and industries.We partner with our customers to reach an appropriate approach to enhance the work environment.Our Business Management Solutions are developed by a team of business people for business purposes using the newest technologies and experienced developers to reach those goals.
Products & Services.
- E-Invoice.
AppLogica E-Invoicing is an application designed and developed to manage invoices by digitizing invoice data in a way that meets all the requirements of the Egyptian Tax Authority (ETA) and Provides Full automation and control in all steps.
- ERP
AppLogica ERP system is designed to connect departments and functions and provide intelligent capabilities to help perform operational tasks with flexibility and excellence.
- CRM
AppLogica CRM is designed to help you understand and anticipate your customers' needs, as well as engage them by acting on insights with highly customized experiences.
- GIS and Mapping services
We provide truly comprehensive GIS and Mapping services to customers across the Globe.
- Custom Web & Mopile Application Development
AppLogica understands that your business needs and goals are constantly evolving. Whether you are a local business or a national brand, AppLogica web & Mobile app development services are tailored to meet your requirements and exceed your expectations.
- IT Professional Services
AppLogica staff is well trained for delivering excellence in day-to-day work, from project managers, developers to designers and IT Support, all IT specialties can be provided with high quality assurance.</p>
<a href="https://www.applogica.com" target="_blank">https://www.applogica.com</a><br>
<br>${Applogica.getLatLng()}<br><img style="width:80px;height:80px" src="./img/Applogica.jpg">`)

var edgePro = L.marker([29.983832062398594, 31.341922195072293], {draggable : false}).addTo(map)
edgePro.bindPopup(`<h3>EDGE-Pro</h3>
<p style = "font-size:9px">an Egyptian shareholding company established in 2004 in Cairo, Egypt. With over 30 years experiences in the fields of Remote Sensing, GIS and Photogrammetry. Our founders along with our caliber staff show diverse expertise in satellite image processing, GIS, software development and training. Our most recent technology shift recorded our dedication for developing new solutions based on simplicity and customizing a single architecture and a single release strategy that integrates all our experiences at Geospatial field into one pool. This ensures performance, reliability, and security at the scale that customers demand without compromise.</p>
<a href="http://www.edge-pro.com" target="_blank">http://www.edge-pro.com</a><br>
<br>${edgePro.getLatLng()}<br><img style="width:80px;height:80px" src="./img/edgepro.jpg">`)

var Huawei = L.marker([30.07873538271889, 31.022409669152225], {draggable : false}).addTo(map)
Huawei.bindPopup(`<h3>Huawei</h3>
<p style = "font-size:9px"> is a leading global provider of information and communications technology (ICT) infrastructure and smart devices. With integrated solutions across four key domains – telecom networks, IT, smart devices, and cloud services – we are committed to bringing digital to every person, home and organization for a fully connected, intelligent world.
Huawei's end-to-end portfolio of products, solutions and services are both competitive and secure. Through open collaboration with ecosystem partners, we create lasting value for our customers, working to empower people, enrich home life, and inspire innovation in organizations of all shapes and sizes.</p>
<a href="http://www.huawei.com/en/" target="_blank">http://www.huawei.com/en/</a><br>
<br>${Huawei.getLatLng()}<br><img style="width:80px;height:80px" src="./img/Huawei.jpg">`)

var Strategizeit = L.marker([29.96011446426423, 31.290061195071235], {draggable : false}).addTo(map)
Strategizeit.bindPopup(`<h3>StrategizeIT Egypt</h3>
<p style = "font-size:9px"> was formed with a focus on business innovation and collaboration,  through a team of senior consultants that have led, worked and delivered state of the art projects in different fields and using countless technologies both regionally and internationally over the last fifteen years. our experience lies in the fields of strategizing, managing, and operating the mega projects that utilize cutting edge technologies like GIS, SDI, Data Acquisition, Data Analysis, Data Security, Business Intelligence, and Big Data Analytics. We incorporate project management, business analysis, and capacity building into the work we do and utilize quality control and assurance KPIs to ensure maximum efficiency and profitability.</p>
<a href="https://egypt.strategizeit.us" target="_blank">https://egypt.strategizeit.us</a><br>
<br>${Strategizeit.getLatLng()}<br><img style="width:80px;height:80px" src="./img/Strategizeit.jpg">`)

var KhatibAlami = L.marker([30.05232560450871, 31.19537693632697], {draggable : false}).addTo(map)
KhatibAlami.bindPopup(`<h3>Khatib & Alami (K&A)</h3>
<p style = "font-size:9px">is a multidisciplinary design consultancy which operates primarily across the Middle East & Africa, Levant, Central and South-East Asia, and Europe. Established more than five decades ago by two university professors, everything we do is based on the principles of professional excellence, integrity and social responsibility. We are proud to have worked on some of the world’s most challenging projects, from iconic buildings and transformational masterplans to record-breaking rail networks and life-critical water supplies.</p>
<a href="http://www.khatibalami.com" target="_blank">http://www.khatibalami.com</a><br>
<br>${KhatibAlami.getLatLng()}<br><img style="width:80px;height:80px" src="./img/ka.jpg">`)

var UnitedATS = L.marker([30.251533221562838, 31.481339618883602], {draggable : false}).addTo(map)
UnitedATS.bindPopup(`<h3>United ATS</h3>
<p style = "font-size:9px"> plays an integral part in aviation safety by providing competent and professional services/training which 
complies with international standards. Services/training is provided with integrity that is customer focused and placing 
Email: training@unitedats.com
value on safety to the aviation industry. We provide solutions to stakeholders to meet mandatory ICAO requirements, 
such services are Instrument Procedures Design, Airspace management and design, Aeronautical Studies, Aeronautical 
Survey, Turn Key eTOD services and all related professional training to our provided services.</p>
<a href="http://www.unitedats.com" target="_blank">http://www.unitedats.com</a><br>
<br>${UnitedATS.getLatLng()}<br><img style="width:80px;height:80px" src="./img/UnitedATS.jpg">`)

var Fugro = L.marker([29.960774087182006, 31.26509393740056], {draggable : false}).addTo(map)
Fugro.bindPopup(`<h3>Fugro</h3>
<p style = "font-size:9px"> We are the world’s leading Geo-data specialist, collecting and analysing comprehensive information about the Earth and the structures built upon it. Through integrated data acquisition, analysis and advice, we unlock insights from Geo-data to help our clients design, build and operate their assets in a safe, sustainable and efficient manner.</p>
<a href="http://www.fugro.com" target="_blank">http://www.fugro.com</a><br>
<br>${Fugro.getLatLng()}<br><img style="width:80px;height:80px" src="./img/Fugro.jpg">`)

var EgyptPost = L.marker([29.97172800549547, 31.283887167469402], {draggable : false}).addTo(map)
EgyptPost.bindPopup(`<b><h3>Egypt Post</h3>
<p style = "font-size:9px">يسعى البريد المصري اليوم إلى تحقيق التحول الرقمي الشامل وتطوير الخدمات المقدمة لتلبية احتياجات العملاء اليومية على أفضل وجه.</p>
<a href="https://www.egyptpost.org/enpo" target="_blank">https://www.egyptpost.org/enpo</a><br>
<br>${EgyptPost.getLatLng()}<br><img style="width:80px;height:80px" src="./img/EgyptPost.jpg">`)

// osm tile layer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// osm layer 2
var sTerrain = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 18,
    ext: 'png'
})
// osm layer 3
var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});
// osm layer 4
var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
});
// osm layer 5
var Esri_WorldStreetMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
});
// Control.Layers
var baseLayers = {
    "OpenStreetMap": osm,
    "Mapbox": sTerrain,
    "Esri_WorldImagery": Esri_WorldImagery,
    "Esri_WorldStreetMap": Esri_WorldStreetMap,
    "Dark": CartoDB_DarkMatter,
};
var companies = L.layerGroup([EsriNA, QSIT, pentab, julfar,vertex,ajc,IDSC,dar,taqa,MaxAB,Spectrum,egyptGas,HERE,CAPMAS,Rashideen,GIZ,Geomatex,TransportforCairo,GeoSol,DigitalEgypt,Narss,Applogica,Namaa,GIG,Cartologic,Elsewedy,fawry,geoPro,edgePro,Huawei,Strategizeit,KhatibAlami,UnitedATS,Fugro,EgyptPost]);
var overlays = {
    "GIS Companies" : companies
};
L.control.layers(baseLayers, overlays).addTo(map);
// GeoCoder location search
L.Control.geocoder().addTo(map);
// get x , y
function onMapClick(e) {
    document.getElementById("mapinfo").value = ` Lng (X) : ${e.latlng.lng} | lat (Y) : ${e.latlng.lat} `
}
map.on("click", onMapClick)
// x,y popup
let pop = L.popup()
function mapPopup(e) {
    pop.setLatLng(e.latlng).setContent( "lng (X) : "+ e.latlng.lng.toString() + "<br>" + " lat (Y) : " + e.latlng.lat.toString()).openOn(map)
}
map.on("click", mapPopup)
// search input and button by Lat,Lng
var searchBtn = document.getElementById("xy-search-btn");
searchBtn.onclick = function () {
    var latandLng = document.getElementById("xy-search").value
    var latandLngArr = latandLng.split(',');
    var lat = latandLngArr[0];
    var lng = latandLngArr[1];
    //circle
    var makeCircle = L.circle([lat, lng], {
        color : 'red',
        fillColor : '#f03',
        fillOpcaity: 0.5,
        radius : 10
    }).addTo(map)
    var makeMarker = L.marker([lat,lng], {draggable : false}).addTo(map);
    makeMarker.bindPopup(`<b>Hello!</b><br>Your Location is: ${makeMarker.getLatLng()}`)
    map.setView([lat, lng], 10);
    makeMarker.setLatLng([lat, lng])
}
// browser Print
L.control.browserPrint().addTo(map);
// map scale bar
L.control.scale({
    imperial : false
}).addTo(map);
// home map view button
document.querySelector(".map-home").onclick = function () {
    map.setView([30.033333, 31.233334], 7)
}
var rmBtn = document.getElementById("leaflet-rm-btn");
rmBtn.onclick = function () {
    var rmlatandLng = document.getElementById("rm-search").value
    var rmlatandLngArr = rmlatandLng.split(',');
    var rmlat = rmlatandLngArr[0];
    var rmlng = rmlatandLngArr[1];
    //circle
    var rmCircle = L.circle([rmlat, rmlng], {
        color : 'red',
        fillColor : '#f03',
        fillOpcaity: 0.5,
        radius : 10
    }).addTo(map)
    var rmMarker = L.marker([rmlat,rmlng], {draggable : true}).addTo(map);
    rmMarker.bindPopup(`<b>Hello!</b><br>Your Location is: ${rmMarker.getLatLng()}`)
    map.setView([rmlat, rmlng], 10);
    rmMarker.setLatLng([rmlat, rmlng])
    // rm
map.on('click', function (e) {
    L.Routing.control({
        waypoints: [
            L.latLng(rmlat,rmlng),
            L.latLng(e.latlng.lat, e.latlng.lng)
        ],
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim()
    }).on('routesfound', function(e){
        e.routes[0].coordinates.forEach(function (coord, index){
            setTimeout(() => {
                markertrack.setLatLng(coord.lat, coord.lng)
            }, 100 * index);
        })
    }).addTo(map);
})
}
// ######################## Convert DMS to Lat,lng #################################
const convert = () => {
    const latD = parseFloat(document.getElementById("latD").value);
    const latM = parseFloat(document.getElementById("latM").value);
    const latS = parseFloat(document.getElementById("latS").value);
    const lngD = parseFloat(document.getElementById("lngD").value);
    const lngM = parseFloat(document.getElementById("lngM").value);
    const lngS = parseFloat(document.getElementById("lngS").value);

    const lat = latD + (latM / 60) + (latS / 3600);
    const lng = lngD + (lngM / 60) + (lngS / 3600);

    var dmslat = document.getElementById("resultLat").value = lat.toFixed(6);
    var dmslng = document.getElementById("resultLng").value = lng.toFixed(6);
    // put lat,long marker
    var dmsMarker = L.marker([dmslat,dmslng], {draggable : false}).addTo(map);
    dmsMarker.bindPopup(`Your Location after converting from DMS to Lat,Lng is: ${dmsMarker.getLatLng()}`).openPopup();
    map.setView([dmslat, dmslng], 10);
    dmsMarker.setLatLng([dmslat, dmslng])
};
// ############################### Convert Lat,long To UTM  ###############################
function convertLatLongToUTM() {
    var lat = parseFloat(document.getElementById("lat").value);
    var long = parseFloat(document.getElementById("long").value);

    // Define the WGS84 ellipsoid parameters
    var a = 6378137; // semi-major axis
    var f = 1/298.257223563; // flattening

    // Convert latitude and longitude from degrees to radians
    var latRad = lat * Math.PI / 180;
    var longRad = long * Math.PI / 180;

    // Determine the UTM zone for the location
    var zone = Math.floor((long + 180) / 6) + 1;

    // Determine the central meridian of the UTM zone
    var cm = (zone * 6) - 183;

    // Calculate the UTM scale factor
    var k0 = 0.9996;

    // Calculate the eccentricity of the ellipsoid
    var e = Math.sqrt(2*f - Math.pow(f, 2));

    // Calculate the parameters for the UTM projection
    var N = a / Math.sqrt(1 - Math.pow(e * Math.sin(latRad), 2));
    var T = Math.pow(Math.tan(latRad), 2);
    var C = Math.pow(e, 2) * Math.pow(Math.cos(latRad), 2);
    var A = (longRad - (cm * Math.PI / 180)) * Math.cos(latRad);
    var M = a * ((1 - Math.pow(e, 2) / 4 - 3 * Math.pow(e, 4) / 64 - 5 * Math.pow(e, 6) / 256) * latRad 
                - (3 * Math.pow(e, 2) / 8 + 3 * Math.pow(e, 4) / 32 + 45 * Math.pow(e, 6) / 1024) * Math.sin(2 * latRad) + (15 * Math.pow(e, 4) / 256 + 45 * Math.pow(e, 6) / 1024) * Math.sin(4 * latRad) 
                - (35 * Math.pow(e, 6) / 3072) * Math.sin(6 * latRad));
    // Calculate the UTM coordinates
    var x = k0 * N * (A + (1 - T + C) * Math.pow(A, 3) / 6 + (5 - 18 * T + Math.pow(T, 2) + 72 * C - 58 * Math.pow(e, 2)) * Math.pow(A, 5) / 120) + 500000;

    var y = k0 * (M + N * Math.tan(latRad) * (Math.pow(A, 2) / 2 + (5 - T + 9 * C + 4 * Math.pow(C, 2)) * Math.pow(A, 4) / 24 + (61 - 58 * T + Math.pow(T, 2) + 600 * C - 330 * Math.pow(e, 2)) * Math.pow(A, 6) / 720));

    // Determine the hemisphere (N or S)
		var hemisphere = lat >= 0 ? "N" : "S";

    // Format the UTM coordinates as a string
		var utmCoords = x.toFixed(2) + ", " + y.toFixed(2) + " " + zone + hemisphere;

    // Display the UTM coordinates in the result element
		document.getElementById("result").value = "Easting: " + x.toFixed(2) + ", " + "Northing: " + y.toFixed(2) + " " + "Zone: " + zone + hemisphere;

    // Put lat,lng marker
    var UTMMarker = L.marker([lat,long], {draggable : false}).addTo(map);
    UTMMarker.bindPopup(`Your Location after converting from DD to DMS is: ${UTMMarker.getLatLng()}`).openPopup();
    map.setView([lat,long], 10);
    UTMMarker.setLatLng([lat,long]);   
}
// ############################# DD to DMS #######################################
function convertDDtoDMS() {
    const lat = parseFloat(document.getElementById('dd-lat').value);
    const long = parseFloat(document.getElementById('dd-long').value);

    if (isNaN(lat) || isNaN(long)) {
        alert('Please enter valid decimal degrees for latitude and longitude.');
        return;
    }
    const latDegrees = Math.floor(lat);
    const latMinutes = Math.floor((lat - latDegrees) * 60);
    const latSeconds = ((lat - latDegrees) * 60 - latMinutes) * 60;
    const latDirection = lat >= 0 ? 'N' : 'S';

    const longDegrees = Math.floor(long);
    const longMinutes = Math.floor((long - longDegrees) * 60);
    const longSeconds = ((long - longDegrees) * 60 - longMinutes) * 60;
    const longDirection = long >= 0 ? 'E' : 'W';

    document.getElementById('res-lat').value = `${latDegrees}° ${latMinutes}' ${latSeconds.toFixed(2)}" ${latDirection}`;
    document.getElementById('res-long').value = `${longDegrees}° ${longMinutes}' ${longSeconds.toFixed(2)}" ${longDirection}`;

    // Put lat,lng marker
    var DDMarker = L.marker([lat,long], {draggable : false}).addTo(map);
    DDMarker.bindPopup(`Your Location after converting from DD to DMS is: ${DDMarker.getLatLng()}`).openPopup();
    map.setView([lat,long], 10);
    DDMarker.setLatLng([lat,long])
}
// ######################### DMS To UTM ##################################
function convertDMStoUTM() {
    // Get the DMS values from the form
  const latDeg = parseInt(document.getElementById('dms-latD').value);
  const latMin = parseInt(document.getElementById('dms-latM').value);
  const latSec = parseInt(document.getElementById('dms-latS').value);
  const latDir = parseInt(document.getElementById('dms-latDir').value);
  const lngDeg = parseInt(document.getElementById('dms-lngD').value);
  const lngMin = parseInt(document.getElementById('dms-lngM').value);
  const lngSec = parseInt(document.getElementById('dms-lngS').value);
  const lngDir = parseInt(document.getElementById('dms-lngDir').value);

    var latDegrees = parseFloat(latDeg);
    var latMinutes = parseFloat(latMin);
    var latSeconds = parseFloat(latSec);
    var latDirection = latDir.toString().toUpperCase();

    var lonDegrees = parseFloat(lngDeg);
    var lonMinutes = parseFloat(lngMin);
    var lonSeconds = parseFloat(lngSec);
    var lonDirection = lngDir.toString().toUpperCase();

    var latDecimal = latDegrees + latMinutes / 60 + latSeconds / 3600;
    if (latDirection == "S") {
        latDecimal = -latDecimal;
    }

    var lonDecimal = lonDegrees + lonMinutes / 60 + lonSeconds / 3600;
    if (lonDirection == "W") {
        lonDecimal = -lonDecimal;
    }
    var utm = fromLatLon(latDecimal, lonDecimal);

    document.getElementById("utm-zone").value = utm.zone
    document.getElementById("utm-easting").value = utm.easting
    document.getElementById("utm-northing").value = utm.northing;

    // Put lat,lng marker
    var utmMarker = L.marker([latDecimal,lonDecimal], {draggable : false}).addTo(map);
    utmMarker.bindPopup(`Your Location after converting from DMS to UTM is: ${utmMarker.getLatLng()}`).openPopup();
    map.setView([latDecimal, lonDecimal], 10);
    utmMarker.setLatLng([latDecimal, lonDecimal])
}
function fromLatLon(lat, lon) {
    var k0 = 0.9996;
    var a = 6378137.0; // Semi-major axis of the ellipsoid (WGS84)
    var f = 1 / 298.257223563; // Flattening of the ellipsoid (WGS84)
    var b = a * (1 - f); // Semi-minor axis of the ellipsoid (WGS84)

    var phi = lat * Math.PI / 180; // Convert latitude to radians
    var lambda = lon * Math.PI / 180; // Convert longitude to radians

    var zoneNumber = Math.floor((lon + 180) / 6) + 1; // Calculate UTM zone number

    var centralMeridian = (zoneNumber - 1) * 6 - 180 + 3; // Calculate UTM central meridian
    var lambda0 = centralMeridian * Math.PI / 180; // Convert central meridian to radians

    var e = Math.sqrt((a*a - b*b) / (a*a)); // Eccentricity of the ellipsoid
    var esq = e*e; // Square of the eccentricity

    var N = a / Math.sqrt(1 - esq * Math.sin(phi)*Math.sin(phi)); // Radius of the curvature of the prime vertical
    var T = Math.tan(phi) * Math.tan(phi); // T parameter
    var C = esq * Math.cos(phi) * Math.cos(phi); // C parameter
    var A = (lambda - lambda0) * Math.cos(phi); // A parameter
    var M = a * ((1 - esq/4 - 3*esq*esq/64 - 5*esq*esq*esq/256) * phi - (3*esq/8 + 3*esq*esq/32 + 45*esq*esq*esq/1024) * Math.sin(2*phi) + (15*esq*esq/256 + 45*esq*esq*esq/1024) * Math.sin(4*phi) - (35*esq*esq*esq/3072) * Math.sin(6*phi)); // M parameter

    var easting = k0 * N * (A + (1 - T + C) * A*A*A / 6 + (5 - 18*T + T*T + 72*C - 58*esq) * A*A*A*A*A / 120) + 500000; // Calculate UTM Easting
    var northing = k0 * (M + N * Math.tan(phi) * (A*A / 2 + (5 - T + 9*C + 4*C*C) * A*A*A*A / 24 + (61 - 58*T + T*T + 600*C - 330*esq) * A*A*A*A*A*A / 720)); // Calculate UTM Northing

    if (lat < 0) {
        northing += 10000000; // Adjust Northing for southern hemisphere
    }
    // Determine the hemisphere (N or S)
    var UTMhemisphere = easting >= 0 ? "N" : "S";

    return {
        easting: easting,
        northing: northing,
        zone: zoneNumber + UTMhemisphere
    };
}
// clear Geo inputs value
function clearGeoAllValue() {
    var geoInputsValue = document.querySelectorAll('.geo input')
    geoInputsValue.forEach(input => input.value = "")
}
// clear Convert inputs value
function clearConvertAllValue() {
    var convertInputsValue = document.querySelectorAll('.convert input')
    convertInputsValue.forEach(input => input.value = "")
}