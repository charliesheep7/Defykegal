import Link from './Link'

interface AppDownloadCTAProps {
  title?: string
  blurb?: string
  placement?: string
}

const IOS_APP_URL = 'https://apps.apple.com/app/defy-kegel-for-men/id0000000000'

const AppDownloadCTA = ({
  title = 'Train your pelvic floor with Defy',
  blurb = 'Defy delivers guided kegel workouts proven to improve erections, beat ED, and strengthen your pelvic floor — in minutes a day. Free to start.',
  placement,
}: AppDownloadCTAProps) => (
  <div className="not-prose my-8 rounded-xl border border-gray-700 bg-gray-900 p-6">
    <h3 className="mb-2 text-lg font-semibold text-gray-100">{title}</h3>
    <p className="mb-4 text-gray-400">{blurb}</p>
    <Link
      href={IOS_APP_URL}
      className="inline-block rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-gray-950 transition-colors hover:bg-gray-100"
    >
      Download Defy on iOS
    </Link>
  </div>
)

export default AppDownloadCTA
