import { StacksLayout } from "./StacksLayout";

export function StacksPrivacyPolicy() {
  return (
    <StacksLayout title="Privacy Policy" effectiveDate="April 25, 2026">
      <p>
        This Privacy Policy describes how Kelp Software ("we", "us") collects,
        uses, and shares information when you use Stacks (the "App"). By using
        the App, you agree to this policy.
      </p>

      <h2>Information we collect</h2>
      <p>
        We aim to collect as little as possible. Specifically:
      </p>
      <ul>
        <li>
          <strong>Account information:</strong> the email address you use to
          sign in, an internal user identifier, and an optional display name
          and friend code you choose.
        </li>
        <li>
          <strong>Friend connections:</strong> records of which accounts you
          have added as friends and the friend codes you exchange.
        </li>
        <li>
          <strong>Listening sessions:</strong> when you join or host a shared
          listening session, we record the session code, participant list, and
          playback metadata (current chapter, position, playback speed) needed
          to keep listeners in sync.
        </li>
        <li>
          <strong>Diagnostic information:</strong> if the App crashes or
          encounters an error, we may collect basic diagnostic data such as
          the device model, operating system version, and a stack trace. This
          data is not tied to your identity beyond your user identifier.
        </li>
      </ul>

      <h2>Information we do not collect</h2>
      <ul>
        <li>
          We do not run third-party advertising and do not collect data for
          advertising purposes.
        </li>
        <li>
          We do not collect the content of audiobooks or other files you load
          into the App. Audiobook files you import are stored on your device.
          When you transfer a file to a friend, the file moves directly
          between devices over your local network and is not uploaded to our
          servers.
        </li>
        <li>
          We do not collect precise location data.
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To create and maintain your account.</li>
        <li>To provide core functionality (friend lists, shared sessions, casting).</li>
        <li>To diagnose and fix bugs and to improve reliability.</li>
        <li>To enforce our Terms of Service and respond to abuse reports.</li>
      </ul>

      <h2>Service providers</h2>
      <p>
        We use the following third-party services to operate the App. Each one
        has its own privacy policy, and we share only what is necessary for
        them to provide their service:
      </p>
      <ul>
        <li>
          <strong>Supabase</strong> (authentication and database hosting) —
          stores account, friend, and session records described above.
        </li>
        <li>
          <strong>Apple and Google</strong> — for app distribution, push
          notifications, and (on Android) Firebase Cloud Messaging delivery.
        </li>
        <li>
          <strong>Google Cast</strong> — when you cast playback to a Cast-enabled
          device, the receiver device handles playback over your local
          network.
        </li>
      </ul>

      <h2>Local-network features</h2>
      <p>
        Stacks uses your device's local Wi-Fi network to discover nearby
        devices, transfer audiobook files between friends, and cast audio.
        These features operate device-to-device over your network. We do not
        receive copies of files transferred this way.
      </p>

      <h2>Data retention and deletion</h2>
      <p>
        We retain account data for as long as your account is active. You can
        request deletion of your account and associated data at any time by
        emailing{" "}
        <a href="mailto:dev@kelpsoftware.com">dev@kelpsoftware.com</a> from
        the address associated with your account. We will delete your data
        within 30 days of receiving a verified request, except where retention
        is required by law.
      </p>

      <h2>Children</h2>
      <p>
        Stacks is not directed to children under 13. We do not knowingly
        collect personal information from children under 13. If you believe a
        child has provided us with personal information, please contact us and
        we will delete it.
      </p>

      <h2>Security</h2>
      <p>
        We use industry-standard transport encryption (HTTPS/TLS) for traffic
        between the App and our servers. No system is perfectly secure, but we
        take reasonable steps to protect your information.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will post the
        revised policy at this URL with an updated effective date. Material
        changes will be communicated in-app or by email where appropriate.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or requests? Email{" "}
        <a href="mailto:dev@kelpsoftware.com">dev@kelpsoftware.com</a>.
      </p>
    </StacksLayout>
  );
}
