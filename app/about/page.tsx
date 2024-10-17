import Image from 'next/image'

export default function About() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
        <Image
          src="/icon.gif"
          alt="Profile picture"
          width={150}
          height={150}
          className="rounded-full"
        />
        <div>
          <p className="mb-4">
          私は、ソフトウェア開発において自己完結型のエンジニアリングに強みを持つ開発者です。


          </p>
          <p className="mb-4">
          これまで、androidアプリ開発及びWebアプリ開発を活用して、効率的かつ高品質な成果を生み出してきました。特に、JavaScript・C・javaを得意とし、複雑な問題を独自に解決するスキルを持っています。
          </p>
          <p>
          常に技術の最新動向を追い、独学で学び続ける姿勢を大切にしながら、最適なソリューションを提供することを目指しています。
          </p>
        </div>
      </div>
    </div>
  )
}