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
  <div className="not-prose border-primary-200 bg-primary-50 dark:border-primary-800 dark:bg-primary-900/20 my-8 rounded-xl border p-6">
    <h3 className="text-primary-700 dark:text-primary-300 mb-2 text-lg font-semibold">{title}</h3>
    <p className="mb-4 text-gray-600 dark:text-gray-400">{blurb}</p>
    <Link
      href={IOS_APP_URL}
      className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 inline-block rounded-lg px-5 py-2.5 text-sm font-medium text-white"
    >
      Download Defy on iOS
    </Link>
  </div>
)

export default AppDownloadCTA
