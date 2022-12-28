

function handleImgClick(sectionClass) {
    var section = document.querySelector('.' + sectionClass);

    section.style.display = 'block';

    // document.querySelector('.section1').style.display = 'block';
    document.querySelector('.wrapper-images').style.filter = 'blur(5px)';

}

const scrollContainer = document.querySelector('.images-line');

scrollContainer.addEventListener('wheel', (evt) => {
    scrollContainer.scrollLeft += evt.deltaY;
});

const scrollContainer2 = document.querySelector('.images-line:nth-child(even)');

scrollContainer2.addEventListener('wheel', (evt) => {
    scrollContainer2.scrollLeft += evt.deltaY;
});

// All event listeners for clicking on games
    document.querySelector('.img').addEventListener('click', function()
    {
        handleImgClick('section1');
    });

    document.querySelector('.img2').addEventListener('click', function()
    {
        handleImgClick('section2');
    });

    document.querySelector('.img3').addEventListener('click', function()
    {
        handleImgClick('section3');
    });

    document.querySelector('.img4').addEventListener('click', function()
    {
        handleImgClick('section4');
    });

    document.querySelector('.img5').addEventListener('click', function()
    {
        handleImgClick('section5');
    });

    document.querySelector('.img6').addEventListener('click', function()
    {
        handleImgClick('section6');
    });

    document.querySelector('.img7').addEventListener('click', function()
    {
        handleImgClick('section7');
    });

    document.querySelector('.img8').addEventListener('click', function()
    {
        handleImgClick('section8');
    });

    document.querySelector('.img9').addEventListener('click', function()
    {
        handleImgClick('section9');
    });

    document.querySelector('.img10').addEventListener('click', function()
    {
        handleImgClick('section10');
    });

    document.querySelector('.img11').addEventListener('click', function()
    {
        handleImgClick('section11');
    });

    document.querySelector('.img12').addEventListener('click', function()
    {
        handleImgClick('section12');
    });

    document.querySelector('.img13').addEventListener('click', function()
    {
        handleImgClick('section13');
    });

    document.querySelector('.img14').addEventListener('click', function()
    {
        handleImgClick('section14');
    });

    document.querySelector('.img15').addEventListener('click', function()
    {
        handleImgClick('section15');
    });

    document.querySelector('.img16').addEventListener('click', function()
    {
        handleImgClick('section16');
    });

    document.querySelector('.img17').addEventListener('click', function()
    {
        handleImgClick('section17');
    });

    document.querySelector('.img18').addEventListener('click', function()
    {
        handleImgClick('section18');
    });





function windowClose(sectionClass) {
    var window = document.querySelector('.' + sectionClass);

    window.style.display = 'none';
    
    document.querySelector('.wrapper-images').style.filter = 'blur(0px)';

    document.querySelector('.line').style.animation = 'runner calc(var(--duration) * 1.3) linear infinite';

}

document.querySelector('.section1').addEventListener('click', function()
{
    windowClose('section1')
});

document.querySelector('.section2').addEventListener('click', function()
{
    windowClose('section2')
});

document.querySelector('.section3').addEventListener('click', function()
{
    windowClose('section3')
});

document.querySelector('.section4').addEventListener('click', function()
{
    windowClose('section4')
});

document.querySelector('.section5').addEventListener('click', function()
{
    windowClose('section5')
});

document.querySelector('.section6').addEventListener('click', function()
{
    windowClose('section6')
});

document.querySelector('.section7').addEventListener('click', function()
{
    windowClose('section7')
});

document.querySelector('.section8').addEventListener('click', function()
{
    windowClose('section8')
});

document.querySelector('.section9').addEventListener('click', function()
{
    windowClose('section9')
});

document.querySelector('.section10').addEventListener('click', function()
{
    windowClose('section10')
});

document.querySelector('.section11').addEventListener('click', function()
{
    windowClose('section11')
});

document.querySelector('.section12').addEventListener('click', function()
{
    windowClose('section12')
});

document.querySelector('.section13').addEventListener('click', function()
{
    windowClose('section13')
});

document.querySelector('.section14').addEventListener('click', function()
{
    windowClose('section14')
});

document.querySelector('.section15').addEventListener('click', function()
{
    windowClose('section15')
});

document.querySelector('.section16').addEventListener('click', function()
{
    windowClose('section16')
});

document.querySelector('.section17').addEventListener('click', function()
{
    windowClose('section17')
});

document.querySelector('.section18').addEventListener('click', function()
{
    windowClose('section18')
});

// Prevent landscape orientation on mobile devices accessing
setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
