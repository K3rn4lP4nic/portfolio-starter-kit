import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
  <p className="mb-4">
  {`Hey there! I'm `}
<span
  className="transition-all duration-300 hover:bg-white hover:text-black hover:[text-stroke:0.5px_black] hover:[-webkit-text-stroke:0.5px_black]"
  style={{
    textDecoration: 'underline dotted',
    textDecorationThickness: '1px',
    textUnderlineOffset: '2px',
    borderRadius: '0px',
    padding: '0px',
    margin: '0px',
  }}
>
  Sai
</span>
  <br />
  <br />
  {`I've been working as a penetration tester for the past four years, but my love for computers began long before that. Growing up, I was lucky to have early access to a computer, a bulky monitor, those clacky keyboards, and the magic of '90s games that pulled me into a world I never wanted to leave.`}
  <br />
  <br />
  {`Back then, it wasn't about careers or certifications. It was about the joy of discovery, the thrill of breaking things just to fix them again, and the quiet excitement of learning something new every day. That childhood curiosity never left me. It evolved, grew deeper, and eventually led me to cybersecurity.`}
  <br />
  <br />
  {`Every time I think about where I started and where I am now, I feel a deep sense of gratitude. This journey has been personal, nostalgic, and full of small moments that made a big impact. And I’m still just getting started.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
