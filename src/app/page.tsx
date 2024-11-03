import Image from "next/image";
import "@fontsource/heebo";

export default function Home() {
  return (
    <>
    {/* Initial section 1 starts */}

    <div className="container">
    <div className="content">
    <div className="text-container">
      <h1 className="typing-animation">
        Hi, I am John,
        <br />
        Creative Technologist
      </h1>
      <p className="description">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit. Exercitation veniam
        consequat sunt nostrud amet.
      </p>
      <button className="resume-button">
        Download Resume
      </button>
    </div>

    <div className="image-container">
      <Image
      src="/john.png"
      alt="John Image"
      className="profile-image"
      width={300}
      height={300}
      />
    </div>
  </div>
</div>

    
    {/* section 1 ends & section 2 starts */}

    <div className="recent-post">

  <div className="post-container">
    <div className="post-header">
      <h4 className="post-title">Recent Post</h4>
      <h4 className="view-all">View All</h4>
    </div>

    <div className="post-cards">
      <div className="post-card">
        <p className="post-card-title">Making a design system from scratch</p>
        <p className="post-date">01 Nov 2024 | Design , Pattern</p>
        <p className="post-description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
      <div className="post-card">
        <p className="post-card-title">Making a design system from scratch</p>
        <p className="post-date">01 Nov 2024 | Design , Pattern</p>
        <p className="post-description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  </div>

</div>


    {/* section 2 ends & section 3 starts */}

    <div className="featured-work">

<p className="featured-title">Featured Work</p>

<div className="work-item">
  <Image
    src="/r31.png"
    alt="John Image"
    width={200}
    height={200}
    className="work-image"
  />
  <div className="work-details">
    <p className="work-title">Designing Dashboards</p>
    <div className="work-meta">
      <p className="work-year">2024</p>
      <p className="work-category">Dashboard</p>
    </div>
    <p className="work-description">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    </p>
  </div>
</div>

<div className="work-item">
  <Image
    src="/r32.png"
    alt="John Image"
    width={200}
    height={200}
    className="work-image"
  />
  <div className="work-details">
    <p className="work-title">Designing Dashboards</p>
    <div className="work-meta">
      <p className="work-year">2024</p>
      <p className="work-category">Dashboard</p>
    </div>
    <p className="work-description">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    </p>
  </div>
</div>

<div className="work-item">
  <Image
    src="/r33.png"
    alt="John Image"
    width={200}
    height={200}
    className="work-image"
  />
  <div className="work-details">
    <p className="work-title">Designing Dashboards</p>
    <div className="work-meta">
      <p className="work-year">2024</p>
      <p className="work-category">Dashboard</p>
    </div>
    <p className="work-description">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    </p>
  </div>
</div>

</div>


      {/* Final section 3 ends */}

    </>
  );
}