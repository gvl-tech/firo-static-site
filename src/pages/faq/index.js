import React from "react"
import { Link } from "gatsby"
import "../../styles/faq.less"
import { Layout } from "../../infrastructure/layouts/Layout"

const FAQ = () => {
  return (
    <Layout>
      <div id="faq">
        <section class="page-intro section">
          <div class="row">
            <div class="col">
              <h1>Frequently Asked Questions</h1>
            </div>
          </div>
        </section>

        <section class="faq-nav">
          <div class="container">
            <ul class="row">
              <li>
                <Link to="#overview">Overview</Link>
              </li>
              <li>
                <Link to="#privacy">Privacy</Link>
              </li>
              <li>
                <Link to="#economics">Economics</Link>
              </li>
              <li>
                <Link to="#mining">Mining</Link>
              </li>
              <li>
                <Link to="#technical">Technical</Link>
              </li>
              <li>
                <Link to="#community">Community</Link>
              </li>
              <li>
                <Link to="#resources">Resources</Link>
              </li>
              <li>
                <Link to="#masternodes">Masternodes</Link>
              </li>
              <li>
                <Link to="#other">Anything else?</Link>
              </li>
            </ul>
          </div>
        </section>

        <section class="faq-section" id="overview">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2>Overview</h2>
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="q1" />
                    <label class="tab-label" for="q1">
                      <h4>Where can I download Firo?</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        The wallet is available for download from our{" "}
                        <Link
                          to="https://firo.org/get-firo/download/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          website
                        </Link>{" "}
                        or{" "}
                        <Link
                          to="https://github.com/firoorg/firo/releases"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Github Releases page
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q2" />
                    <label class="tab-label" for="q2">
                      <h4>
                        As a truly private cryptocurrency, won’t Firo be used
                        for terrible things?
                      </h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        As with any other technology, Firo can be used for both
                        good and evil. However, we are firm believers that the
                        net good for Firo far outweighs the bad. We believe
                        money should be a public utility. In an increasingly
                        digital age that's moving away from digital cash, money
                        has increasingly been surveilled and used as a tool of
                        control of oppressive governments whereby they can
                        choose what you can spend on or even cut you off from
                        your savings.
                      </p>
                      <p>
                        Privacy is also an essential element if we believe in
                        cryptocurrency being used as a medium of transfer.
                        Without privacy, businesses would be revealing who their
                        suppliers are, how much they're paying their employees
                        or how much they're receiving. Even paying for a cup of
                        coffee with a currency that has a transparent public
                        ledger can potentially reveal your holdings or addresses
                        that are connected to you. We expect privacy in our day
                        to day financial transactions and no one wants our bank
                        statements leaked out to the world to see without our
                        permission. Privacy is not about hiding, it's about
                        retaining the ability to give consent to our data.
                      </p>
                      <p>
                        Recent reports and studies have also shown that while
                        privacy cryptocurrencies often make the headlines for
                        use on the darknet or perceived illicit behaviour, these
                        form a very small proportion of overall transactions.
                        Privacy preserving cryptocurrencies also{" "}
                        <Link to="https://www.perkinscoie.com/en/news-insights/anti-money-laundering-regulation-of-privacy-enabling-cryptocurrencies.html">
                          aren't necessarily at odds with existing KYC/AML
                          practices
                        </Link>
                        .
                      </p>
                      <p>
                        Privacy is an essential element missing in
                        cryptocurrencies today and Firo pushes the frontiers of
                        privacy technology enabled by cryptography while
                        retaining options for any user to disclose their details
                        should they wish.
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q3" />
                    <label class="tab-label" for="q3">
                      <h4>What is Firo's mission?</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        Firo believes in the importance of financial privacy in
                        cryptocurrency as an essential element in maintaining
                        the original goal of cryptocurrency: to be a public
                        utility for money. We have seen how freedom of commerce
                        or even access to our savings are things that are no
                        longer things that can be taken for granted and
                        authoritarian governments have increasingly used money
                        as a tool of control. As fiat currencies go increasingly
                        digital with some going as far as totally replacing
                        physical cash, we lose control over our own money
                        instead relying on intermediaries.
                      </p>
                      <p>
                        Bitcoin was originally created as an answer to this by
                        ensuring you can be self sovereign over your money and
                        to serve as uncensorable and unseizable money that isn't
                        controlled by any one entity. Bitcoin's lack of privacy
                        however has now made it much easier to seize or
                        blacklist funds and due to ossification of the protocol,
                        is unlikely to take serious steps to address this.
                      </p>
                      <p>
                        Firo has dedicated itself to being a privacy preserving
                        cryptocurrency and have designed and built trustless
                        privacy protocols such as{" "}
                        <Link to="https://eprint.iacr.org/2019/373">
                          Lelantus
                        </Link>{" "}
                        and{" "}
                        <Link to="https://eprint.iacr.org/2021/1173">
                          Lelantus Spark
                        </Link>{" "}
                        that have inspired and shaped the designs of other
                        privacy protocols (for e.g. Triptych, Seraphis,
                        Lelantus-MW).
                      </p>
                      <p>
                        For it to be truly a public utility that isn't beholden
                        to any one entity,
                      </p>
                      <p>
                        Firo strives to increase individual liberty. By
                        guaranteeing financial privacy, Firo can help ensure
                        freedom of commerce. People should be able to transact
                        however they want, as long as it does not infringe on
                        the well-being or individual liberty of others. We are
                        also big believers that freedom of commerce also
                        facilitates peace and prosperity across countries and
                        cultures. By guaranteeing financial privacy, Firo can
                        directly guarantee{" "}
                        <Link
                          to="https://www.youtube.com/watch?v=3dAdI3Gzodo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          fungibility
                        </Link>
                        , an essential property for free commerce.
                      </p>
                      <p>
                        Although there are many privacy solutions out there for
                        cryptocurrencies, it is our aim in providing the
                        strongest level of privacy without sacrificing on
                        trustlessness, ease of use and relying on time tested
                        cryptographic building blocks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="faq-section" id="privacy">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2>Privacy</h2>
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="q4" />
                    <label class="tab-label" for="q4">
                      <h4>How does Firo's privacy mechanism work?</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        Blockchains without privacy like Bitcoin only offer
                        pseudo-anonymity. In blockchains without complete
                        privacy, it is the relationships and links between
                        addresses that can reveal private information about you.
                        Every single coin has an immutable history.
                      </p>
                      <p>
                        This is why{" "}
                        <Link to="https://newconomy.media/news/the-premium-value-of-freshly-mined-virgin-bitcoin/">
                          freshly mined Bitcoins with no previous transaction
                          history can command premiums of 20% or more
                        </Link>{" "}
                        as the holder does not have to worry whether it has been
                        tainted.
                      </p>
                      <p>
                        Firo through the Lelantus protocol allows you to burn
                        your coins to destroy them so that they stop existing
                        and then redeem them later for coins that have no
                        previous transaction history. The process of burning and
                        redeeming breaks the links between addresses making
                        transaction graph analysis very difficult.
                      </p>
                      <p>
                        The burning process destroys the coin so that they stop
                        existing and therefore their transaction history stops
                        there and cannot be traced.
                      </p>
                      <p>
                        The redemption process involves giving a zero-knowledge
                        proof that you previously burnt coins, without having to
                        show which were the coins you burnt. The freshly
                        redeemed coins appear as new coins with no previous
                        transaction history and hence have no linkage with the
                        original coins that were burnt. In Lelantus, input and
                        change amounts are also hidden.
                      </p>
                      <p>
                        Firo's upcoming privacy protocol Lelantus Spark takes
                        this idea further with all amounts being hidden and
                        removing the need to 'redeem'. Users can now pass these
                        coins directly between each other without having to
                        expose the output amount. It also adds Spark addresses
                        that are public shareable but cannot be looked up on the
                        blockchain.
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q5" />
                    <label class="tab-label" for="q5">
                      <h4>
                        How does Firo compare to other privacy preserving
                        cryptocurrencies?
                      </h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        Firo's privacy protocols{" "}
                        <Link to="https://eprint.iacr.org/2019/373">
                          Lelantus
                        </Link>{" "}
                        and{" "}
                        <Link to="https://eprint.iacr.org/2021/1173">
                          Lelantus Spark
                        </Link>{" "}
                        combines very high anonymity sets (~65,000) while
                        relying on well tested cryptographic building blocks
                        that do not require trusted setup.
                      </p>
                      <p>
                        This compares very favorably to existing solutions like
                        mixers or even ring signatures that typically have
                        limited anonymity sets per transaction (for e.g. Monero
                        has a ring size of 11). Models that rely on decoys also
                        have weaknesses where deanonymization becomes easier
                        when{" "}
                        <Link to="https://slideslive.com/38911785/satoshi-has-no-clothes-failures-in-onchain-privacy">
                          paying repeatedly to the same entity
                        </Link>
                        .{" "}
                        <Link to="https://arxiv.org/abs/1704.04299">
                          Decoy selection algorithms have to be also carefully
                          selected
                        </Link>{" "}
                        to avoid reducing the effective anonymity set and if
                        ring sizes are not large enough, can be subject to{" "}
                        <Link to="https://eprint.iacr.org/2019/455">
                          Sybil attacks
                        </Link>
                        . Similarly, Mimblewimble based coins rely highly on
                        high transaction volumes in a block and also have{" "}
                        <Link to="https://medium.com/beam-mw/on-linkability-of-mimblewimble-da9ba71e83b4">
                          limited resistance towards Sybil attacks
                        </Link>
                        . Firo's use of large anonymity pools and sliding
                        windows greatly alleviate these problems.
                      </p>
                      <p>
                        Solutions relying on zkSNARKs such as the Zerocash
                        protocol used in Zcash offer almost global anonymity
                        sets but rely on complicated new cryptography and more
                        exotic assumptions. They also require a trusted setup
                        which for some represents an unacceptable compromise.
                      </p>
                      <p>
                        Firo aims to achieve a balance of high anonymity
                        combined with well-established cryptographic building
                        blocks that don't require trust. Lelantus Spark also is
                        designed to be modular that would allow parts to be
                        switched out in an easier fashion as cryptographic
                        advancements come along giving very good flexibility.
                        Spark addresses are also very flexible allowing for a
                        variety of view keys for selective transparency and also
                        efficient multisig/threshold signatures. They also do
                        not require interactivity and can be openly posted since
                        they cannot be searched on the blockchain giving
                        enhanced receiver privacy.
                      </p>
                      <p>
                        Also as Firo uses the sliding window approach to privacy
                        instead of decoys, existing chain analysis methods such
                        as used for ring signatures or coin mixers would not
                        work.
                      </p>
                      <p>
                        You can view a more detailed comparison and analysis on
                        our{" "}
                        <Link to="https://firo.org/guide/privacy-coin-comparison.html">
                          privacy comparison guide
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q6" />
                    <label class="tab-label" for="q6">
                      <h4>Why aren't Firo transactions private by default?</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        The short answer is that our earlier privacy protocols
                        made this difficult but we are moving towards it
                        especially with the deployment of Lelantus Spark! All
                        our official wallets already anonymize or prompt you to
                        do so using Lelantus by default but Lelantus Spark with
                        its new private Spark address system makes it much
                        easier to fully transition to privacy by default.
                      </p>
                      <p>
                        When the project first launched in 2016, it used the
                        Zerocoin privacy protocol, originally a proposal for
                        Bitcoin which used regular transparent addresses and
                        therefore did not hide amounts. With zero knowledge
                        proof technology in its infancy, back then we felt it
                        was prudent to balance privacy with supply auditability
                        to ensure we could detect inflation should there be a
                        flaw in the technology.
                      </p>
                      <p>
                        We then dedicated development to removing trusted setup
                        from Zerocoin and did so with our Sigma privacy protocol
                        but it retained the same limitations of Zerocoin with
                        regards to hiding amounts. With the development of
                        Lelantus, our current privacy protocol, input and change
                        amounts are hidden but the output amount remains
                        exposed. Additionally, the anonymization function in
                        Lelantus requires the users private key and therefore
                        required user input to anonymize.
                      </p>
                      <p>
                        With the development of Lelantus Spark, this new scheme
                        retained all the benefits of our previous schemes namely
                        high anonymity sets, small proof sizes, high efficiency,
                        no trusted setup, well understood cryptographic building
                        blocks and added Spark addresses which allows funds to
                        be kept privately without revealing amounts and can be
                        freely shared without compromising privacy. Users can
                        send funds directly to Spark addresses and have them
                        anonymized immediately without needing recipient
                        interaction.
                      </p>
                      <p>
                        With the deployment of Lelantus Spark later this year
                        (2023), all our official wallets will by default use
                        Spark addresses and all mining rewards will mandatorily
                        go to Spark addresses increasing the anonymity set. We
                        will also approach exchanges to support withdrawals to
                        Spark addresses. Some time after Spark deployment,
                        Helsing (our private masternode staking) will then be
                        launched allowing masternode collateral to be held in
                        Spark addresses and for masternode rewards to go into
                        Spark addresses directly. We are hopeful with these
                        changes that the vast majority of transactions will
                        become private.
                      </p>
                      <p>
                        During the interim, transparent addresses still have a
                        role to play in enabling easier interoperability with
                        other chains where those ecosystems already have
                        implemented support for Bitcoin addresses for e.g. with
                        cross-chain bridges. Eventually as the ecosystem catches
                        up to using Spark addresses, transparent addresses can
                        be phased out completely.
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q7" />
                    <label class="tab-label" for="q7">
                      <h4>
                        What are sliding windows as used in Lelantus and
                        Lelantus Spark?
                      </h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        The way privacy works for cryptocurrency transactions is
                        that you want to be hiding in a big crowd. The more
                        people use private transactions the more it improves the
                        privacy of other transcations. Anonymity loves company!
                        However with the type of proofs we use, the bigger the
                        crowd is, the more computationally intensive each
                        transaction is. As such, the crowd cannot grow to
                        infinite sizes. Spark finds a middle ground between
                        robust privacy and scalability. Firo has picked 65,000
                        as the maximum size of the crowd though this may
                        increase with improved optimizations or cryptographic
                        advancements.
                      </p>
                      <p>
                        Think of each Spark transaction as a coin inside a large
                        bucket with tons of other coins. These coins all have
                        different values but they look the same. Whenever you
                        spend, you're taking coins from the bucket but outsiders
                        can't really tell which coins you're taking since they
                        all look the same. When the bucket becomes full, the
                        protocol opens a new bucket for people to start placing
                        their coins in. However, we don't want to start with a
                        totally empty bucket otherwise they would need to wait
                        for other people to throw their coins into the bucket
                        before they can pull coins out of it for good anonymity.
                        As such, we take 16,000 coins from the previous bucket
                        and dump it into the new bucket so that there's already
                        a big 'crowd' in the new set. Hence each bucket has some
                        overlapping coins and this is what we call sliding
                        windows!
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q8" />
                    <label class="tab-label" for="q8">
                      <h4>
                        What is the relationship between Lelantus Spark and
                        Seraphis?
                      </h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        Seraphis was previously named ZCT and was a framework
                        developed independently by Koe that did not have exact
                        implementation details that would fit into it such as
                        choice of proofs or addressing structures.
                      </p>
                      <p>
                        We shared our work on Lelantus Spark with Koe and our
                        innovations with Spark addresses solved an open problem
                        with ZCT's addressing system which then lead to
                        Seraphis. This is why the addressing structures are
                        quite similar. While similar to Spark, Seraphis is a
                        framework rather than a protocol with full
                        implementation details and does not yet have an academic
                        style paper with full security proofs unlike Lelantus
                        Spark.
                      </p>
                      <p>
                        Seraphis makes design choices for Monero by using it to
                        scale ring sizes. Lelantus Spark on the other hand
                        doesn't use decoy sampling and instead relies on large
                        pools of anonymity combined with sliding windows between
                        the pools. This offers much greater anonymity per
                        transaction and avoids many of the problems with decoy
                        selection algorithms at the cost of performance which
                        can be mitigated with batching techniques.
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q9" />
                    <label class="tab-label" for="q9">
                      <h4>What is trusted setup?</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        In cryptography, a trusted setup is used to create a
                        cryptographic system by generating certain initial
                        parameters which will later be destroyed. An easy
                        analogy is to imagine creating a lockbox with a key and
                        then throwing the key away.
                      </p>
                      <p>
                        Why it is called trusted setup is that you must trust
                        the person who created it, to actually destroy the
                        parameters. Zero knowledge proof privacy systems such as
                        the Zerocoin (as originally used in Firo and now
                        deprecated) and Zerocash (as used in Zcash, PirateChain,
                        Komodo and Horizen) protocol requires a trusted setup.
                      </p>
                      <p>
                        Firo’s privacy protocols Lelantus and our upcoming
                        Lelantus Spark, do not require trusted setups.
                      </p>
                      <h5>Why it Matters</h5>
                      <p>
                        Having a trusted setup is generally undesirable and adds
                        another point of failure. One of blockchain’s mottos is
                        ‘Don’t trust. Verify’ and trusted setups are the
                        antithesis of that philosophy.
                      </p>
                      <p>
                        A compromised trusted setup in zero-knowledge proofs
                        allows someone to forge the proofs meaning that coins
                        can be created out of thin air leading to
                        hyperinflation. In privacy coins where amounts are
                        obscured, such inflation can also remain undetected.
                      </p>
                      <p>
                        There are ways to mitigate the risks of a trusted setup
                        such as using a multi-party ceremony that if in theory
                        works, requires all parties in the ceremony to collude.
                        If at least one party destroys their portion of the
                        secret, then the system is secure.
                      </p>
                      <p>
                        However, even if the risk is mitigated, we still need to
                        be sure parties do not collude or that the ceremony was
                        set up correctly or was not backdoored which can be
                        challenging.
                      </p>
                      <p>
                        For example, Zcash’s original Sprout MPC ceremony
                        sparked controversy because of binaries that were not{" "}
                        <Link to="https://twitter.com/peterktodd/status/919586655480066048?lang=en">
                          deterministically built
                        </Link>{" "}
                        and{" "}
                        <Link to="https://twitter.com/peterktodd/status/1052999647793504256?lang=en">
                          MPC transcripts that went missing
                        </Link>{" "}
                        (which turned out to be to{" "}
                        <Link to="https://electriccoin.co/blog/zcash-counterfeiting-vulnerability-successfully-remediated/#background">
                          prevent a flaw from being exploited until it was
                          patched
                        </Link>
                        ).
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q10" />
                    <label class="tab-label" for="q10">
                      <h4>
                        What is a zero-knowledge cryptographic proof, and how
                        does it work?
                      </h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        A zero-knowledge proof is a cryptographic method to
                        prove that you know something without giving any other
                        details about it, except that the fact that you know it.
                        For example, zero-knowledge proofs could be used to show
                        you have assets of more than a million dollars, without
                        showing the exact amount you own or the transactions
                        that make it up.
                      </p>
                      <p>
                        Zero-knowledge proofs are an ideal fit for providing
                        privacy on blockchains. On a public blockchain, everyone
                        has to be able to verify the authenticity of
                        transactions and so every transaction is posted for
                        everyone to see along with its entire history.
                      </p>
                      <p>
                        Zero-knowledge proofs allow others to verify that a
                        valid transaction has happened without giving any other
                        information thus providing privacy while retaining
                        verifiability.
                      </p>
                      <p>
                        Firo's privacy protocols use a combination of different
                        zero-knowledge proofs in its privacy mechanism to allow
                        people to burn their coins and redeem them later for
                        brand new ones with no previous transaction history
                        without showing which coins were burnt.
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q11" />
                    <label class="tab-label" for="q11">
                      <h4>
                        How does blockchain-tracking software work, and why is
                        it so dangerous to anonymity?
                      </h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        To best understand how blockchain-tracking software
                        works, it helps to view Bitcoin as a kind of financial
                        social network. The same kinds of mechanisms used to
                        break privacy in social networks, by analyzing social
                        network topology, can be used to break privacy in the
                        Bitcoin network. By taking a pre-existing social network
                        like Facebook, we can use that information to generate
                        heuristics about who is transacting with whom on
                        Bitcoin.
                      </p>
                      <p>
                        There is a relevant research paper that attempted to
                        identify Twitter users by using data from Flickr. They
                        took the twitter data, and stripped away all identifying
                        information about the user such as name or username.
                        Then, by looking at the social network topology of the
                        anonymized twitter data and comparing it to the flickr
                        data, they found that they could identify one third of
                        twitter users, even though the twitter data was
                        anonymized.
                      </p>
                      <p>
                        This research also applies to Bitcoin. If we take an
                        anonymous network such as Bitcoin, and use data from a
                        social network from Facebook or Bitcointalk, we can use
                        topological analysis to identify a lot of users.{" "}
                        <Link to="https://eprint.iacr.org/2012/596.pdf">
                          A comprehensive study on Bitcoin’s privacy
                        </Link>{" "}
                        also shows that even with best practices, a significant
                        proportion of users can be identified from their
                        behaviour.
                      </p>
                      <p>
                        The converse is also true where{" "}
                        <Link to="https://arxiv.org/pdf/1801.07501.pdf">
                          Bitcoin’s network can also deanonymize TOR users
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q12" />
                    <label class="tab-label" for="q12">
                      <h4>
                        How does Firo protect transactions on a network level?
                      </h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        Firo was the first cryptocurrency to go live with{" "}
                        <Link to="https://arxiv.org/abs/1805.11060">
                          Dandelion++
                        </Link>{" "}
                        on mainnet. Most other cryptocurrencies use a gossip
                        model whereby when they receive a transaction, they tell
                        all other nodes connected to it about the transaction.
                        As a result the transaction propagates quickly through
                        the network. The downside is that an adversary who can
                        monitor the network can see this chain reaction
                        happening and can{" "}
                        <Link to="https://arxiv.org/abs/1405.7418">
                          approximate with a high degree of accuracy
                        </Link>{" "}
                        which node the transaction originated from.
                      </p>
                      <p>
                        Dandelion++ obfuscates these type of analysis by
                        changing the way the transactions are broadcasted by
                        randomly choosing to tell one other node about the
                        transaction or to switch to gossip mode. This makes it
                        harder to associate a node with a particular
                        transaction.
                      </p>
                      <p>
                        Firo also fully supports the use of the Tor network that
                        can work alongside with Dandelion++.
                      </p>
                      <p>
                        Firo is intending to move to a{" "}
                        <Link to="https://en.wikipedia.org/wiki/Mix_network">
                          mixnet
                        </Link>{" "}
                        model in the future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="faq-section" id="economics">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2>Economics</h2>
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="q13" />
                    <label class="tab-label" for="q13">
                      <h4>Where can I buy Firo?</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        You can see all the exchanges and/or swap services Firo
                        is available{" "}
                        <Link to="https://firo.org/get-firo/buy-firo/">
                          here
                        </Link>{" "}
                        or on{" "}
                        <Link
                          to="https://www.coingecko.com/en/coins/firo"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Coingecko
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q14" />
                    <label class="tab-label" for="q14">
                      <h4>What will Firo's Development Reward be used for?</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        15% of Firo’s block reward goes towards a{" "}
                        <Link to="https://explorer.firo.org/address/aFrAVZFr8pva5mG8XKaUH8EXcFVVNxLiuB">
                          development fund
                        </Link>{" "}
                        to fund development work and other efforts in promoting
                        Firo’s adoption.
                      </p>
                      <p>
                        The fund pays primarily for coders and cryptography
                        researchers, community managers, audits, bug bounties,
                        integration costs and infrastructure overheads.We
                        regularly publish summaries of how these funds are being
                        spent on{" "}
                        <Link to="https://forum.firo.org">our forums</Link>.
                      </p>
                      <p>
                        We are always actively looking for talent so please do
                        reach out over{" "}
                        <Link to="mailto:team@firo.org">email</Link> or our{" "}
                        <Link to="https://discord.com/invite/TGZPRbRT3Y">
                          Discord
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q15" />
                    <label class="tab-label" for="q15">
                      <h4>
                        What is the total supply and distribution of Firo?
                      </h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        There will be 21.4 million Firos. Firo follows the same
                        distribution and halving cycle as Bitcoin (every 4
                        years).
                      </p>
                      <p>
                        The current block reward of 6.25 FIRO/block is divided
                        as follows:
                      </p>
                      <ul>
                        <li>Miners (25%, 1.5625 FIRO)</li>
                        <li>Masternodes (50%, 3.125 FIRO )</li>
                        <li>Development Fund (15%, 0.9375 FIRO)</li>
                        <li>Community Fund (10%, 0.625 FIRO)</li>
                      </ul>
                      <p>
                        For more information about how we arrived at this new
                        distribution and the development fund, please read this{" "}
                        <Link to="https://firo.org/2020/05/04/block-reward-allocation-and-development-fund-for-the-next-4-years.html">
                          blog post.
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="faq-section" id="mining">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2>Mining</h2>
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="q16" />
                    <label class="tab-label" for="q16">
                      <h4>What mining algorithm does Firo use?</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        Firo uses the FiroPoW algorithm targeted at GPUs that
                        keeps mining accessible to everyone.
                      </p>
                      <p>
                        Firo has always been a strong believer in the power of
                        Proof-of-Work (PoW). PoW enables community building,
                        fair distribution and ties the value of Firo to the
                        physical world with energy.
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q17" />
                    <label class="tab-label" for="q17">
                      <h4>What is FiroPoW?</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        FiroPoW is a mining algorithm that&nbsp;is highly
                        optimized for GPU mining and designed to be both FPGA
                        and ASIC resistant to even the playing field and allow
                        people to mine from their own consumer hardware. We have
                        always been big fans of Proof of Work’s ability to tie
                        the value of a virtual currency to the real world along
                        with a way to distribute Firo’s supply in a fair and
                        decentralized manner free from restrictions.
                      </p>
                      <p>
                        FiroPoW follows{" "}
                        <Link to="https://github.com/ifdefelse/ProgPOW">
                          ProgPoW’s 0.9.4
                        </Link>{" "}
                        spec with a small change to have the algorithm randomly
                        change with every block. The starting DAG size will be
                        slightly over 4GB and will increase by 8MB every 1300
                        blocks (~4.5 days). This DAG size has been chosen to
                        support most modern graphics cards.
                      </p>
                      <div class="iframe-embed">
                        <iframe
                          src="https://www.youtube.com/embed/DAJirQaBIzY?feature=oembed&amp;wmode=transparent"
                          allowfullscreen=""
                          data-aspectratio="0.562962962962963"
                          width="100%"
                          height={350}
                          styles="
                    width: 0px;
                    height: 0px;
                    opacity: 1;
                    visibility: visible;
                  "
                          frameborder="0"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q18" />
                    <label class="tab-label" for="q18">
                      <h4>How can I mine Firo?</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        Do check out our{" "}
                        <Link to="https://firo.org/guide/how-to-mine-firo.html">
                          Firo mining guide
                        </Link>
                        !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="faq-section" id="technical">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2>Technical</h2>
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="q19" />
                    <label class="tab-label" for="q19">
                      <h4>Where are your blockchain explorers?</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        Our explorer can be found on{" "}
                        <Link to="https://explorer.firo.org">
                          https://explorer.firo.org
                        </Link>{" "}
                        and our testnet explorer can be found here:{" "}
                        <Link
                          to="https://testexplorer.firo.org"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://testexplorer.firo.org
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q20" />
                    <label class="tab-label" for="q20">
                      <h4>
                        Why do some blocks deviate significantly from the target
                        block time?
                      </h4>
                    </label>
                    <div class="tab-content">
                      <p>Our target block time is 5 minutes.</p>
                      <p>
                        The chances of not getting a block in&nbsp;
                        <i>
                          blocktime * <b>K</b>
                        </i>
                        is approximately
                        <i>
                          e
                          <sup>
                            (-<b>K</b>)
                          </sup>
                        </i>
                        .
                      </p>
                      <p>
                        This means that the chance of getting a ≥30-minute block
                        (<b>K</b>=6) is ≈0.25%. So even though our target block
                        time is 5 minutes, roughly 1 in 400 blocks can take more
                        than at least 30 minutes to find.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="faq-section" id="community">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2>Community</h2>
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="q21" />
                    <label class="tab-label" for="q21">
                      <h4>Do you have a blog?</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        Yup! Visit <Link to="https://firo.org/blog/">here</Link>
                        .
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q22" />
                    <label class="tab-label" for="q22">
                      <h4>How can I get involved with the Firo community?</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        We have active communities on our{" "}
                        <Link to="https://discord.com/invite/TGZPRbRT3Y">
                          Discord
                        </Link>
                        , <Link to="https://t.me/firoorg">Telegram</Link> and{" "}
                        <Link to="https://forum.firo.org">Forums</Link>! You can
                        check out all our social links{" "}
                        <Link to="https://firo.org/community/social/">
                          here.
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="faq-section" id="resources">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2>Resources</h2>
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="q23" />
                    <label class="tab-label" for="q23">
                      <h4>Where can I find a Firo block explorer?</h4>
                    </label>
                    <div class="tab-content">
                      <p>We have two primary block explorers:</p>
                      <p>
                        Official Firo explorer:{" "}
                        <Link to="https://explorer.firo.org/">
                          explorer.firo.org
                        </Link>
                        <br />
                        CryptoID Explorer:{" "}
                        <Link to="https://chainz.cryptoid.info/firo/">
                          chainz.cryptoid.info/firo
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="faq-section" id="masternodes">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2>Masternodes</h2>
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="q24" />
                    <label class="tab-label" for="q24">
                      <h4>What are Masternodes for</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        Masternodes in Firo are incentivized nodes that host
                        Firo’s infrastructure and provide additional services
                        such as 51% mining attack protection via LLMQ chain
                        locks and instant sends
                      </p>
                      <p>
                        To prevent Sybil attacks, each masternode requires a
                        collateral of 1000 FIRO backing it to prove skin in the
                        game and encourages honest behaviour.
                      </p>
                      <p>
                        In return for hosting Firo’s infrastructure and their
                        added services, they earn 50% of the block reward. As
                        incentivized infrastructure, masternode holders can
                        invest in hardware that have higher specifications and
                        are motivated to keep the node updated and running. This
                        helps Firo’s blockchain scale and ensures a robust
                        network of nodes.
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q25" />
                    <label class="tab-label" for="q25">
                      <h4>
                        What happens if I don’t have 1000 FIRO? Can I share a
                        masternode with someone else?
                      </h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        In the event people want to pool together their funds to
                        make a masternode, please take note that you have to{" "}
                        <strong>
                          trust the person holding the funds for everyone
                        </strong>
                        .
                      </p>
                      <p>
                        This is because the <strong>1000 FIRO</strong> needs to
                        be sent to a new address in one transaction and the
                        custody is with one person. We ideally do not recommend
                        such arrangements unless you really trust the person
                        holding the funds on behalf of you. There is nothing to
                        prevent the person holding the masternode funds from
                        running away with your share.
                      </p>
                      <p>
                        This is not a problem if you have 1000 FIRO as you can
                        still keep those funds in your own local wallet. A
                        masternode hosting provider in such cases only requires
                        your operator key and the transaction ID of your 1000
                        FIRO deposit.
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q26" />
                    <label class="tab-label" for="q26">
                      <h4>Are my coins safe on a Firo masternode?</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        Masternodes do not hold any funds. They merely hold a
                        masternode private key (not the same as your actual
                        private key) which allows you to start and stop the
                        masternode. There is a marker in your masternode
                        configuration that links the masternode to your 1000
                        FIRO deposit. In the event of a masternode being hacked,
                        all that will happen is that your masternode will go
                        offline and you will lose your position in the payment
                        queue.
                      </p>
                      <p>
                        Your local Firo wallet still holds the 1000 FIRO so it
                        is that wallet that will need to be secured. Ensure that
                        your wallet is frequently backed up and encrypt your
                        wallet.
                      </p>
                      <p>
                        If you go with a masternode provider, all he requires is
                        your masternode private key and the transaction ID of
                        your 1000 FIRO deposit. The masternode provider does not
                        need your private key to the funds. You also do not need
                        to send any funds to him.
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q27" />
                    <label class="tab-label" for="q27">
                      <h4>How do I set up a Firo masternode?</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        Please refer to this{" "}
                        <Link to="https://firo.org/guide/masternode-setup.html">
                          masternode setup guide
                        </Link>
                        .
                      </p>
                      <p>
                        There will also be a number of masternode hosting
                        providers who can simplify the process for you for a
                        fee.
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q28" />
                    <label class="tab-label" for="q28">
                      <h4>
                        How much are the rewards from hosting a masternode?
                      </h4>
                    </label>
                    <div class="tab-content">
                      <p>50% of the block reward is paid to masternodes.</p>
                      <p>
                        Masternodes are selected for payment in each block
                        (approximately every 2.5 minutes) from a deterministic
                        masternode list, and moved to the back of the list after
                        payment. As more masternodes are created, the duration
                        between payments increases. If the collateral behind a
                        masternode is spent, or if a masternode stops providing
                        services to the network for more than one hour, it is
                        removed from the list until normal service resumes. In
                        this way, masternodes are given incentive to provide
                        efficient and reliable services to the network.
                      </p>
                      <p>
                        The frequency of the block payout depend on how many
                        active Masternodes there are. The more masternodes there
                        are, the longer it takes to receive the masternode block
                        reward.
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q29" />
                    <label class="tab-label" for="q29">
                      <h4>What do I need to host a Firo masternode?</h4>
                    </label>
                    <div class="tab-content">
                      <p>A Firo masternode requires</p>
                      <ul>
                        <li>1000 FIRO (refundable at any time)</li>
                        <li>A fixed IP address</li>
                        <li>1 GB of RAM</li>
                        <li>
                          Enough disk space to store the blockchain (&gt;10 gb
                          is recommended for the moment)
                        </li>
                      </ul>
                      <p>
                        Typically a VPS of this specification costs around USD5
                        to run a month per node and you can head on to Amazon
                        AWS, Google Cloud, Microsoft Azure, Leaseweb,{" "}
                        <Link to="https://www.vultr.com/?ref=6847471">
                          Vultr,
                        </Link>{" "}
                        <Link to="https://www.linode.com/?r=af3000184137a5eedea8fcfd03fd48f36b8471a3">
                          Linode
                        </Link>
                        , or{" "}
                        <Link to="https://m.do.co/c/f89c8c2af033">
                          DigitalOcean
                        </Link>{" "}
                        to obtain a basic VPS when masternodes are launched.
                        There will also be masternodes providers who can assist
                        you to set this up and/or maintain it for a small fee.
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q30" />
                    <label class="tab-label" for="q30">
                      <h4>What is a masternode?</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        Nodes are computers that host a full copy of Firo’s
                        blockchain and help to verify the validity of
                        transactions.
                      </p>
                      <p>
                        Masternodes are a special type of node that earn part of
                        Firo’s block reward (currently at 50% of the block
                        reward) in return for hosting a reliable and powerful
                        node that helps to support the network along with
                        providing additional services to the network. For
                        example, masternodes form themselves into long living
                        masternode quorums (LLMQs) that provide ChainLocks which
                        secures the chain against 51% mining attacks with single
                        block finality and InstantSend which allows transactions
                        to be finalized within a few seconds even before block
                        confirmation.
                      </p>
                      <p>
                        Masternodes require a refundable collateral of 1000 FIRO
                        to ensure masternode holders have a stake in FIRO and
                        are incentivized to keep it working honestly, updated
                        often and have a high uptime. This collateral can be
                        transferred out at any time without any penalty.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="faq-section" id="other">
          <div class="container">
            <div class="row">
              <div class="col">
                <h2>Anything else?</h2>
                <div class="tabs">
                  <div class="tab">
                    <input type="checkbox" id="q31" />
                    <label class="tab-label" for="q31">
                      <h4>What is BEP20 Firo or Binance-Pegged Firo?</h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        Binance-Pegged Firo also know as BEP20 Firo is a token
                        issued by the Binance exchange on Binance Smart Chain
                        (BSC). It is a custodial wrapped form of Firo whereby
                        BEP20 Firo is backed by native Firo that is custodied by
                        Binance. The core team has no control over this
                        token.&nbsp;
                      </p>
                      <p>
                        Being a BSC token, BEP20 Firo does not utilize the
                        privacy technology of Firo but can instead interact with
                        defi protocol, AMM DEXes and other smart contracts on
                        the BSC network.
                      </p>
                      <p>
                        You can obtain BEP20 Firo either by withdrawing from
                        Binance and selecting the BSC network instead of the
                        Firo network or by swapping it on FiroDEX.
                      </p>
                    </div>
                  </div>
                  <div class="tab">
                    <input type="checkbox" id="q32" />
                    <label class="tab-label" for="q32">
                      <h4>
                        I have a question that is not listed here, please help!
                      </h4>
                    </label>
                    <div class="tab-content">
                      <p>
                        Please drop by our{" "}
                        <Link to="https://discord.com/invite/TGZPRbRT3Y">
                          Discord
                        </Link>{" "}
                        or <Link to="https://t.me/firoorg">Telegram</Link> to
                        ask any questions!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default FAQ
