var code0 = document.getElementById('header')
var code3 = document.getElementById('footer')
// var code5 = document.getElementById('headerDirectAccess')

if (code0) {
  code0.innerHTML = `
<div class="navLogo">

  <a href="../home.html">BeautyNatt</a>

  <div id="search">
    <form id="search-form">
    <input type="text" id="searchInput" placeholder="Find pages" disabled>
    <button type="submit"><img src="../img/manifyingGlassIcon.png"></button>
    </form>
  </div>

</div>

<div class="navbar">
  <ul>
   <li><a href="../home.html">Home</a></li>
    <li><a href="../home.html#latestPagesPart">Latest Pages</a></li>
   <li><a href="../about-us.html">About Us</a></li>
    <li><a href="../contact.html">Contact</a></li>
   <li><a href="../home.html#faq">FAQ</a></li>
  </ul>
</div>

<div onclick="hambmenu()" id="nav-icon3" class="hamb">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>

<section class="seccion hidden-section" id="section">
  <ul>
   <li><a href="../home.html">Home</a></li>
   <li><a href="../home.html#latestPagesPart">Latest Pages</a></li>
   <li><a href="../about-us.html">About Us</a></li>
    <li><a href="../contact.html">Contact</a></li>
   <li><a href="../home.html#faq">FAQ</a></li>
  </ul>
</section>
    `
}

if (code3) {
  code3.innerHTML = `
<a onclick="document.body.scrollTop = 0; document.documentElement.scrollTop = 0;" class="backUpBtn">
      BACK UP ▲
    </a>
    <div class="footer">

      <div class="mainFooter">

        <ins>BeautyNatt</ins>
        <p style="margin-top: 0px;;">You should know that for each sale made through our pages, we will
          receive a commission from it for the reason that we are affiliated with them. But this will not affect your
          purchase at all.</p>
      </div>

      <div class="linksFooter">
        <div class="linksPart">

        <!--  <div class="linksSide">
            <div class="">
              <h3>Categories</h3>
              <a href="../home.html">Makeup</a>
              <a href="../home.html">Body Care</a>
              <a href="../home.html">Frangrance</a>
              <a href="../home.html">Hair Care</a>
              <a href="../home.html">Oral Care</a>
              <a href="../home.html">Skin Care</a>
            </div>
          </div>
-->
          <div>
            <div class="linksSide">
              <div class="">
                <h3>Main Pages</h3>
                <a href="../home.html">Home</a>
                <a href="../contact.html">Contact</a>
                <a href="../about-us.html">About Us</a>
                <a href="../">Terms</a>
                <a href="../sitemap.html">Sitemap</a>
                <a href="../home.html#latestPagesPart">Latest Pages</a>
              </div>
              <div class="">
                <h3>Social Media</h3>
                <a target="_blank" href="https://www.facebook.com/">Facebook</a>
                <a target="_blank" href="https://www.instagram.com/">Instagram</a>
                <a target="_blank" href="https://twitter.com/">Twitter</a>
                <a target="_blank" href="https://www.youtube.com/">Youtube</a>
              </div>
            </div>

          </div>
        </div>
`
}