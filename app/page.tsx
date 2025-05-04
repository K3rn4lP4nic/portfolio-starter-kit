import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hey there! I'm Sai.`}
  <br />
  <br />
  {`With 4 years of experience as a penetration tester, my journey in tech has been anything but ordinary. I've always been drawn to the intricate layers of computers and cybersecurity — not just as a profession, but as a deep-rooted passion.`}
  <br />
  <br />
  {`Growing up with early access to a computer felt like unlocking a new world. From the pixelated charm of '90s games to the structured complexity of modern-day security systems, every chapter of this journey has shaped me. It's a beautiful transition — one that constantly reminds me to stay grateful and keep embracing the path that led me here.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
