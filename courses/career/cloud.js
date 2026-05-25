PUSH({
  id: 'cloud',
  name: 'Cloud Computing',
  icon: '☁️',
  color: '#ff7043',
  description: 'IaaS · PaaS · SaaS — the building blocks of AWS, Azure, and GCP demystified.',
  units: [

    /* ============== UNIT 1 — What is cloud? ============== */
    {
      id: 'cld-u1', name: 'Unit 1 · What is cloud computing?', description: 'On-prem vs cloud · the *aaS layers',
      lessons: [
        {
          id: 'cld-u1-l1', name: 'On-prem vs cloud', icon: '☁️', xp: 15,
          challenges: [
            { type: 'concept', title: 'Renting computers, not owning them', content: `<p><strong>Cloud computing</strong> = renting compute, storage, and networking over the internet, billed by usage, instead of buying and racking your own hardware.</p>
<div class="code-block"><span class="com">On-prem (your own datacenter)</span>
  buy servers           → CapEx, 3-5 year lifecycle
  rack &amp; cool          → real estate + power bill
  capacity planning     → over-provision "just in case"
  patch + replace       → your problem

<span class="com">Cloud (rent from a provider)</span>
  spin up in seconds    → OpEx, pay-as-you-go
  no hardware           → provider runs the metal
  scale up/down         → match real demand
  managed services      → focus on your app</div>
<p>You trade <strong>control</strong> for <strong>speed and elasticity</strong>.</p>` },
            { type: 'multiple-choice', prompt: 'The biggest economic shift cloud brings is:',
              options: [
                { text: 'CapEx → OpEx (own → rent)', code: false },
                { text: 'Faster CPUs', code: false },
                { text: 'Open-source licensing', code: false },
                { text: 'IPv6 adoption', code: false }
              ],
              correct: 0, explanation: 'You stop buying hardware up-front and instead pay only for what you use.' },
            { type: 'true-false', statement: 'In a public cloud you still own the physical servers.', correct: false, explanation: 'The provider owns the metal. You rent capacity on it.' },
            { type: 'match-pairs', prompt: 'Match each property to "on-prem" or "cloud".', leftLabel: 'Property', rightLabel: 'Fits best',
              pairs: [
                { left: 'Pay only for what you use', right: 'Cloud' },
                { left: '3-year hardware refresh cycles', right: 'On-prem' },
                { left: 'Scale to 1000 servers in minutes', right: 'Cloud (elasticity)' },
                { left: 'Full physical control of disks', right: 'On-prem' }
              ] },
            { type: 'fill-blank', prompt: 'Pick the term: the cloud bills you on a ____ model.',
              codeLines: [{ html: 'billing model = <span class="str">"<span class="fn">_BLANK_</span>"</span>;' }],
              tokens: ['pay-as-you-go', 'flat-rate', 'one-time', 'subscription-only'],
              correctAnswer: 'pay-as-you-go',
              explanation: 'Pay-as-you-go (usage-based) is the defining commercial model.' }
          ]
        },
        {
          id: 'cld-u1-l2', name: 'IaaS · PaaS · SaaS · FaaS', icon: '🧱', xp: 20,
          challenges: [
            { type: 'concept', title: 'The four service models', content: `<div class="code-block"><span class="com">IaaS — Infrastructure as a Service</span>
  You manage: OS, runtime, app, data
  Provider:   network, storage, virtualization, hardware
  Examples:   EC2, Azure VM, GCE

<span class="com">PaaS — Platform as a Service</span>
  You manage: app code + data
  Provider:   OS, runtime, scaling, patching
  Examples:   Elastic Beanstalk, App Service, App Engine

<span class="com">SaaS — Software as a Service</span>
  You manage: just your data + users
  Provider:   everything else
  Examples:   Gmail, Salesforce, Notion

<span class="com">FaaS — Functions as a Service (serverless)</span>
  You write: one function; provider runs it on demand
  Examples:  Lambda, Azure Functions, Cloud Functions</div>
<p>The higher up you go, the less you manage and the less you control.</p>` },
            { type: 'multiple-choice', prompt: 'You deploy a VM, install Linux yourself, then run your app. That\'s:',
              options: [
                { text: 'SaaS', code: false },
                { text: 'PaaS', code: false },
                { text: 'IaaS', code: false },
                { text: 'FaaS', code: false }
              ],
              correct: 2, explanation: 'IaaS = raw virtual machines; you manage everything above the hypervisor.' },
            { type: 'multiple-choice', prompt: 'Gmail is an example of:',
              options: [
                { text: 'IaaS', code: false },
                { text: 'PaaS', code: false },
                { text: 'SaaS', code: false },
                { text: 'FaaS', code: false }
              ],
              correct: 2, explanation: 'Fully-managed application delivered over the browser = SaaS.' },
            { type: 'match-pairs', prompt: 'Match service model → example.', leftLabel: 'Model', rightLabel: 'Example',
              pairs: [
                { left: 'IaaS', right: 'EC2 / Azure VM / GCE' },
                { left: 'PaaS', right: 'App Engine / Elastic Beanstalk' },
                { left: 'SaaS', right: 'Gmail / Salesforce' },
                { left: 'FaaS', right: 'Lambda / Cloud Functions' }
              ] },
            { type: 'tap-tokens', prompt: 'Build the responsibility ladder from MOST to LEAST that you manage.',
              tokens: ['On-prem', '>', 'IaaS', '>', 'PaaS', '>', 'SaaS'],
              correctOrder: ['On-prem', '>', 'IaaS', '>', 'PaaS', '>', 'SaaS'],
              explanation: 'On-prem you own everything; SaaS you own nothing but the data.' },
            { type: 'true-false', statement: 'In PaaS, you still patch the operating system.', correct: false, explanation: 'PaaS providers handle OS patching for you. That\'s the whole point.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — The big three ============== */
    {
      id: 'cld-u2', name: 'Unit 2 · AWS · Azure · GCP', description: 'The big three at a glance',
      lessons: [
        {
          id: 'cld-u2-l1', name: 'Market share & strengths', icon: '🏆', xp: 20,
          challenges: [
            { type: 'concept', title: 'AWS, Azure, GCP — the big three', content: `<div class="code-block"><span class="com">AWS  (Amazon Web Services)  — ~32% market share</span>
  oldest, widest service catalog (~200+ services)
  strongest in: startups, big-data, ML infra

<span class="com">Azure (Microsoft)            — ~23% market share</span>
  best with Microsoft stack (Windows, AD, .NET, Office365)
  strongest in: enterprises, hybrid cloud, government

<span class="com">GCP   (Google Cloud)         — ~11% market share</span>
  best data + ML tools (BigQuery, Vertex AI, TensorFlow)
  strongest in: data analytics, Kubernetes (it invented k8s)</div>
<p>All three offer the same core primitives; the differences are in pricing, tooling, and the long tail of higher-level services.</p>` },
            { type: 'multiple-choice', prompt: 'Which provider invented Kubernetes?',
              options: [
                { text: 'AWS', code: false },
                { text: 'Azure', code: false },
                { text: 'GCP (Google)', code: false },
                { text: 'IBM', code: false }
              ],
              correct: 2, explanation: 'Kubernetes came out of Google\'s internal "Borg" system, open-sourced in 2014.' },
            { type: 'true-false', statement: 'AWS, Azure, and GCP all offer compute, storage, networking, and managed databases as core services.', correct: true, explanation: 'The big three are 95% feature-overlap at the primitives layer.' },
            { type: 'match-pairs', prompt: 'Match the provider with a typical strength.', leftLabel: 'Provider', rightLabel: 'Sweet spot',
              pairs: [
                { left: 'AWS', right: 'Widest catalog, startups' },
                { left: 'Azure', right: 'Microsoft/enterprise stack' },
                { left: 'GCP', right: 'Data analytics & ML' },
                { left: 'All three', right: 'Pay-as-you-go billing' }
              ] },
            { type: 'type-answer', prompt: 'Which provider has the largest public-cloud market share (roughly one-third)?', code: '',
              accept: ['AWS', 'aws', 'Amazon', 'Amazon Web Services'],
              explanation: 'AWS sits around 32%, ahead of Azure (~23%) and GCP (~11%).' }
          ]
        },
        {
          id: 'cld-u2-l2', name: 'Regions, AZs, and edges', icon: '🌍', xp: 25,
          challenges: [
            { type: 'concept', title: 'Region · Availability Zone · Edge', content: `<div class="code-block"><span class="com">Region</span>      = a geographic area (e.g. us-east-1, westeurope, asia-south1)
              contains multiple AZs
              ~30 regions on AWS, 60+ on Azure, 40+ on GCP

<span class="com">Availability Zone (AZ)</span> = one or more isolated datacenters
              independent power, cooling, networking
              fail-domain inside a region (3 AZs is typical)

<span class="com">Edge / PoP</span>  = small footprint near end-users
              powers CDN (CloudFront, Azure Front Door, Cloud CDN)
              hundreds of locations worldwide</div>
<p>Rule of thumb: deploy across <strong>multiple AZs</strong> for high availability inside a region; deploy across <strong>multiple regions</strong> for disaster recovery.</p>` },
            { type: 'multiple-choice', prompt: 'Two AZs in the same region differ from two separate regions because:',
              options: [
                { text: 'AZs are in the same building', code: false },
                { text: 'AZs share power and cooling', code: false },
                { text: 'AZs are in the same geographic area; regions are far apart', code: false },
                { text: 'AZs have no SLA', code: false }
              ],
              correct: 2, explanation: 'AZs are independent datacenters in the same area; regions can be on different continents.' },
            { type: 'true-false', statement: 'A single AZ outage should never take down a multi-AZ application.', correct: true, explanation: 'That\'s exactly what multi-AZ design protects against.' },
            { type: 'match-pairs', prompt: 'Match concept → scope.', leftLabel: 'Concept', rightLabel: 'Scope',
              pairs: [
                { left: 'Region', right: 'Geographic area' },
                { left: 'AZ', right: 'Isolated datacenter(s)' },
                { left: 'Edge / PoP', right: 'CDN-style local cache' },
                { left: 'VPC', right: 'Your private network inside a region' }
              ] },
            { type: 'reorder-code', prompt: 'Order from largest to smallest scope.',
              lines: [
                'Region',
                'Availability Zone',
                'Datacenter',
                'Rack'
              ],
              correctOrder: [0, 1, 2, 3] },
            { type: 'type-answer', prompt: 'What is the abbreviation for "Availability Zone"?', code: '', accept: ['AZ', 'az'], explanation: 'AZ. AWS, Azure, and GCP all use the same term.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Compute ============== */
    {
      id: 'cld-u3', name: 'Unit 3 · Compute services', description: 'VMs, instance families, autoscaling',
      lessons: [
        {
          id: 'cld-u3-l1', name: 'EC2 · Azure VM · GCE', icon: '🖥️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Virtual machines, three ways', content: `<div class="code-block"><span class="com">AWS    — EC2  (Elastic Compute Cloud)</span>
  instance types: t3.micro, m6i.large, c7g.xlarge, ...
  AMI = Amazon Machine Image (boot template)

<span class="com">Azure  — Virtual Machines</span>
  VM sizes: B-series (burst), D-series (general), E-series (memory)
  image = Marketplace or custom

<span class="com">GCP    — Compute Engine (GCE)</span>
  machine types: e2-small, n2-standard-4, c3-highmem-8
  image = boot disk</div>
<p>Same idea on every cloud: a <strong>virtual machine</strong> running on a hypervisor, you pick the size and the OS image, you pay per hour (or per second).</p>` },
            { type: 'multiple-choice', prompt: 'In AWS, what is an AMI?',
              options: [
                { text: 'A network ACL', code: false },
                { text: 'A bootable image template for an EC2 instance', code: false },
                { text: 'A billing unit', code: false },
                { text: 'A region', code: false }
              ],
              correct: 1, explanation: 'AMI = Amazon Machine Image. It\'s a snapshot you boot new instances from.' },
            { type: 'match-pairs', prompt: 'Match each provider\'s VM service.', leftLabel: 'Provider', rightLabel: 'VM service',
              pairs: [
                { left: 'AWS', right: 'EC2' },
                { left: 'Azure', right: 'Virtual Machines' },
                { left: 'GCP', right: 'Compute Engine' },
                { left: 'Oracle Cloud', right: 'OCI Compute' }
              ] },
            { type: 'fill-blank', prompt: 'AWS smallest burstable family is the t-series. Complete:',
              codeLines: [{ html: 'instance type = <span class="str">"<span class="fn">_BLANK_</span>.micro"</span>;' }],
              tokens: ['t3', 'm5', 'c6', 'r6'], correctAnswer: 't3',
              explanation: 't3 / t3a / t4g are the burstable general-purpose families.' },
            { type: 'true-false', statement: 'In all three clouds, you can pick your CPU family (Intel / AMD / ARM).', correct: true, explanation: 'AWS Graviton, Azure Ampere, GCP Tau T2A — all offer ARM options now.' }
          ]
        },
        {
          id: 'cld-u3-l2', name: 'Autoscaling & load balancing', icon: '📈', xp: 25,
          challenges: [
            { type: 'concept', title: 'Autoscale on metrics; load-balance traffic', content: `<div class="code-block"><span class="com">Autoscaling group (ASG)</span>
  min:     2 instances    <span class="com">// never go below</span>
  desired: 4              <span class="com">// current target</span>
  max:     20             <span class="com">// upper cap</span>
  policy:  scale out when CPU &gt; 70% for 5 min
           scale in  when CPU &lt; 30% for 10 min

<span class="com">Load balancer (LB)</span>
  AWS:   ALB (HTTP) / NLB (TCP) / GLB
  Azure: Application Gateway / Load Balancer
  GCP:   Cloud Load Balancing</div>
<p>The LB sits in front; the ASG sits behind. As metrics rise, the ASG launches new instances and registers them with the LB. As metrics drop, instances are drained and terminated.</p>` },
            { type: 'multiple-choice', prompt: 'Why "scale out" instead of "scale up"?',
              options: [
                { text: 'Out is cheaper than up', code: false },
                { text: 'Out = more instances (horizontal); up = bigger instance (vertical)', code: false },
                { text: 'They mean the same thing', code: false },
                { text: 'Up is deprecated', code: false }
              ],
              correct: 1, explanation: 'Scale OUT adds instances horizontally; scale UP makes one instance bigger. Out is the cloud-native default.' },
            { type: 'tap-tokens', prompt: 'Build the rule: scale OUT when CPU exceeds 70%.',
              tokens: ['scale', 'out', 'when', 'CPU', '>', '70%', 'for', '5min', 'scale', 'in'],
              correctOrder: ['scale', 'out', 'when', 'CPU', '>', '70%', 'for', '5min'],
              explanation: 'Trigger thresholds always include a duration so brief spikes don\'t cause flapping.' },
            { type: 'match-pairs', prompt: 'Match cloud → load-balancer naming.', leftLabel: 'Cloud', rightLabel: 'LB name',
              pairs: [
                { left: 'AWS', right: 'ALB / NLB' },
                { left: 'Azure', right: 'Application Gateway' },
                { left: 'GCP', right: 'Cloud Load Balancing' },
                { left: 'Generic term', right: 'L4 / L7 load balancer' }
              ] },
            { type: 'output-predict', prompt: 'ASG is min=2, max=10, desired=3. CPU spikes; the scale-out rule adds 4 instances. How many run now?',
              code: 'min=2  desired=3  max=10\nscale-out adds +4',
              options: ['3', '7', '10', '6'],
              correct: 1, explanation: '3 + 4 = 7. Still under the max of 10, so all 4 launch.' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — Storage ============== */
    {
      id: 'cld-u4', name: 'Unit 4 · Storage services', description: 'Object · block · file storage',
      lessons: [
        {
          id: 'cld-u4-l1', name: 'Object storage: S3, Blob, GCS', icon: '🪣', xp: 20,
          challenges: [
            { type: 'concept', title: 'Buckets and objects', content: `<div class="code-block"><span class="com">Object storage</span> = key/value blobs, accessed via HTTPS API
  no file system, no folders (just key prefixes)
  unlimited scale, very high durability
  great for: backups, static assets, data lakes, logs

<span class="com">AWS</span>:  S3       — bucket / object / key
<span class="com">Azure</span>: Blob Storage — container / blob
<span class="com">GCP</span>:  Cloud Storage (GCS) — bucket / object</div>
<p>S3 advertises <strong>11 nines (99.999999999%)</strong> of durability. That\'s designed for one lost object per ten million per ten thousand years.</p>` },
            { type: 'multiple-choice', prompt: 'A "folder" in S3 is really:',
              options: [
                { text: 'A directory in a file system', code: false },
                { text: 'Just a prefix in the object key', code: false },
                { text: 'A separate bucket', code: false },
                { text: 'An ACL group', code: false }
              ],
              correct: 1, explanation: 'There are no folders. The UI shows them by splitting keys on "/".' },
            { type: 'true-false', statement: 'S3 durability and S3 availability are the same thing.', correct: false, explanation: 'Durability = will the data exist later? Availability = can you reach it right now?' },
            { type: 'match-pairs', prompt: 'Match provider → object storage product.', leftLabel: 'Cloud', rightLabel: 'Product',
              pairs: [
                { left: 'AWS', right: 'S3' },
                { left: 'Azure', right: 'Blob Storage' },
                { left: 'GCP', right: 'Cloud Storage (GCS)' },
                { left: 'All', right: 'HTTPS object API' }
              ] },
            { type: 'fill-blank', prompt: 'S3 object identifier format:',
              codeLines: [{ html: 's3://my-bucket/<span class="fn">_BLANK_</span>/file.csv' }],
              tokens: ['key', 'folder', 'dir', 'path'],
              correctAnswer: 'key',
              explanation: 'Everything after the bucket is the object key (slashes are just part of it).' }
          ]
        },
        {
          id: 'cld-u4-l2', name: 'Storage classes & lifecycle', icon: '🧊', xp: 25,
          challenges: [
            { type: 'concept', title: 'Hot · warm · cold · archive', content: `<div class="code-block"><span class="com">Storage classes (hot → cold)</span>
  Standard / Hot    — millisecond access, highest \$/GB
  Infrequent Access — cheaper, small retrieval fee
  Archive / Glacier — pennies/GB/mo, minutes-to-hours to thaw
  Deep Archive      — cheapest, 12+ hour restore

<span class="com">Lifecycle rule (example, S3)</span>
  day 0  → Standard
  day 30 → Standard-IA
  day 90 → Glacier Flexible
  day 365→ Glacier Deep Archive
  day 2555 (7y) → delete</div>
<p>You almost never pick one class manually. You write a <strong>lifecycle policy</strong> that moves data automatically as it ages.</p>` },
            { type: 'multiple-choice', prompt: 'You have 5 PB of logs accessed once a year. Best tier?',
              options: [
                { text: 'S3 Standard', code: false },
                { text: 'S3 Glacier Deep Archive', code: false },
                { text: 'S3 Intelligent-Tiering only', code: false },
                { text: 'EBS volumes', code: false }
              ],
              correct: 1, explanation: 'Rarely-accessed cold data is what Deep Archive is built for — pennies per GB per month.' },
            { type: 'match-pairs', prompt: 'Match access pattern → storage class.', leftLabel: 'Pattern', rightLabel: 'Class',
              pairs: [
                { left: 'Live app data', right: 'Standard / Hot' },
                { left: 'Backup, monthly access', right: 'Infrequent Access' },
                { left: 'Compliance, yearly', right: 'Archive / Glacier' },
                { left: 'Legal hold, decades', right: 'Deep Archive' }
              ] },
            { type: 'true-false', statement: 'Object storage durability and availability are the same number.', correct: false, explanation: 'S3 Standard: 11 nines durability, 4 nines availability. Different SLAs.' },
            { type: 'output-predict', prompt: 'Lifecycle says: move to Glacier after 90 days. Today is day 89. Which class is the object in?',
              code: 'lifecycle:\n  day 0  → Standard\n  day 90 → Glacier',
              options: ['Standard', 'Glacier', 'Deep Archive', 'Deleted'],
              correct: 0, explanation: 'It moves on day 90; on day 89 it\'s still Standard.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Networking ============== */
    {
      id: 'cld-u5', name: 'Unit 5 · Networking', description: 'VPC, subnets, NAT, IGW',
      lessons: [
        {
          id: 'cld-u5-l1', name: 'VPCs & subnets', icon: '🕸️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Your private network in the cloud', content: `<div class="code-block"><span class="com">VPC (Virtual Private Cloud)</span>
  a logically isolated network, defined by a CIDR
  e.g. 10.0.0.0/16   (65,536 IPs)

<span class="com">Subnet</span> = a slice of the VPC, tied to ONE AZ
  10.0.1.0/24   public  (us-east-1a)
  10.0.2.0/24   public  (us-east-1b)
  10.0.10.0/24  private (us-east-1a)
  10.0.11.0/24  private (us-east-1b)

<span class="com">Public  subnet</span> = has a route to an Internet Gateway (IGW)
<span class="com">Private subnet</span> = no direct internet; uses a NAT for outbound only</div>
<p>Same building blocks on Azure (<strong>VNet</strong> + Subnet) and GCP (VPC + Subnet, though GCP subnets are regional).</p>` },
            { type: 'multiple-choice', prompt: 'A subnet on AWS lives in:',
              options: [
                { text: 'Multiple regions', code: false },
                { text: 'Multiple AZs', code: false },
                { text: 'Exactly one AZ', code: false },
                { text: 'No AZ — it floats', code: false }
              ],
              correct: 2, explanation: 'On AWS, each subnet is bound to a single AZ. (GCP differs — subnets are regional.)' },
            { type: 'multiple-choice', prompt: 'A private subnet has no route to the Internet Gateway. How can instances still install OS patches?',
              options: [
                { text: 'They can\'t', code: false },
                { text: 'Through a NAT Gateway in a public subnet', code: false },
                { text: 'Through the load balancer', code: false },
                { text: 'Through the VPC peering connection', code: false }
              ],
              correct: 1, explanation: 'NAT lets private instances make OUTBOUND calls (to apt/yum mirrors) without being reachable inbound.' },
            { type: 'match-pairs', prompt: 'Match concept → purpose.', leftLabel: 'Concept', rightLabel: 'Purpose',
              pairs: [
                { left: 'IGW (Internet Gateway)', right: 'In + out internet for public subnets' },
                { left: 'NAT Gateway', right: 'Outbound-only internet for private subnets' },
                { left: 'Route Table', right: 'Where does this packet go next?' },
                { left: 'Security Group', right: 'Instance-level firewall' }
              ] },
            { type: 'tap-tokens', prompt: 'Build a typical CIDR for a /16 VPC.',
              tokens: ['10', '.', '0', '.', '0', '.', '0', '/', '16', '24'],
              correctOrder: ['10', '.', '0', '.', '0', '.', '0', '/', '16'],
              explanation: '10.0.0.0/16 gives 65,536 IPs — a comfortable default.' }
          ]
        },
        {
          id: 'cld-u5-l2', name: 'Cross-AZ & cross-region', icon: '🌐', xp: 25,
          challenges: [
            { type: 'concept', title: 'Latency, cost, and blast radius', content: `<div class="code-block"><span class="com">Traffic stays inside one AZ</span>
  &lt;1 ms     · free or near-free

<span class="com">Cross-AZ (within a region)</span>
  ~1-2 ms   · small \$/GB egress between AZs
  for HA: replicate state across AZs

<span class="com">Cross-region</span>
  20-200 ms · noticeable egress charges
  for DR or geo-distributed users
  use replication (S3 CRR, RDS cross-region read replica)</div>
<p>The general guidance: keep <strong>chatty</strong> services close (same AZ), keep <strong>HA</strong> across AZs, keep <strong>DR</strong> across regions.</p>` },
            { type: 'true-false', statement: 'Cross-region traffic is free.', correct: false, explanation: 'It almost always costs money. AWS, Azure, and GCP all charge egress between regions.' },
            { type: 'multiple-choice', prompt: 'Where should you replicate state for surviving a single-AZ outage?',
              options: [
                { text: 'Same AZ, different rack', code: false },
                { text: 'Across multiple AZs in the same region', code: false },
                { text: 'Across multiple regions only', code: false },
                { text: 'On-prem backup', code: false }
              ],
              correct: 1, explanation: 'Multi-AZ is the standard HA pattern within a region.' },
            { type: 'reorder-code', prompt: 'Order from lowest to highest latency.',
              lines: [
                'Same-AZ (same datacenter)',
                'Cross-AZ (same region)',
                'Cross-region (same continent)',
                'Cross-region (transcontinental)'
              ],
              correctOrder: [0, 1, 2, 3] },
            { type: 'match-pairs', prompt: 'Match scope → typical use.', leftLabel: 'Scope', rightLabel: 'Use',
              pairs: [
                { left: 'Same AZ', right: 'Chatty internal services' },
                { left: 'Multi-AZ', right: 'High availability' },
                { left: 'Multi-region', right: 'Disaster recovery' },
                { left: 'Edge / CDN', right: 'Static asset delivery' }
              ] }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Identity & access ============== */
    {
      id: 'cld-u6', name: 'Unit 6 · Identity & access (IAM)', description: 'Users, roles, policies, least privilege',
      lessons: [
        {
          id: 'cld-u6-l1', name: 'Users, groups, roles, policies', icon: '🔐', xp: 25,
          challenges: [
            { type: 'concept', title: 'Who can do what, on which resource?', content: `<div class="code-block"><span class="com">Principal</span>  — WHO  (user, role, service)
<span class="com">Action</span>     — WHAT (e.g. s3:GetObject)
<span class="com">Resource</span>   — ON WHAT (an ARN)
<span class="com">Effect</span>     — Allow or Deny

<span class="com">Example: AWS IAM policy (JSON)</span>
{
  "Effect": "Allow",
  "Action": ["s3:GetObject"],
  "Resource": "arn:aws:s3:::reports/*"
}</div>
<p>A <strong>user</strong> has long-term credentials (password / access key). A <strong>role</strong> is assumed temporarily — used by services (e.g. an EC2 instance assumes a role to call S3) or by humans via federation.</p>` },
            { type: 'multiple-choice', prompt: 'Best practice for an EC2 instance that needs to read S3:',
              options: [
                { text: 'Store access keys on the instance', code: false },
                { text: 'Attach an IAM role to the instance', code: false },
                { text: 'Use root credentials', code: false },
                { text: 'Use anonymous public access', code: false }
              ],
              correct: 1, explanation: 'Instance roles deliver short-lived credentials automatically — no long-lived keys on disk.' },
            { type: 'true-false', statement: 'In IAM, an explicit Deny always overrides an Allow.', correct: true, explanation: 'Deny wins. This is true on AWS, and similar rules exist on Azure and GCP.' },
            { type: 'match-pairs', prompt: 'Match cloud → identity service name.', leftLabel: 'Cloud', rightLabel: 'Service',
              pairs: [
                { left: 'AWS', right: 'IAM' },
                { left: 'Azure', right: 'Entra ID (formerly Azure AD) + RBAC' },
                { left: 'GCP', right: 'Cloud IAM' },
                { left: 'Everywhere', right: 'Principle of Least Privilege' }
              ] },
            { type: 'fill-blank', prompt: 'The guiding security principle is "____ privilege".',
              codeLines: [{ html: 'principle = <span class="str">"<span class="fn">_BLANK_</span> privilege"</span>;' }],
              tokens: ['least', 'most', 'maximum', 'admin'],
              correctAnswer: 'least',
              explanation: 'Give each identity only the permissions it actually needs, nothing more.' }
          ]
        },
        {
          id: 'cld-u6-l2', name: 'Roles & trust', icon: '🪪', xp: 25,
          challenges: [
            { type: 'concept', title: 'Trust relationships and AssumeRole', content: `<div class="code-block"><span class="com">A role has TWO policies</span>
  permissions policy — what the role CAN do
  trust policy       — WHO can assume the role

<span class="com">trust policy (allow EC2 to assume this role)</span>
{
  "Effect": "Allow",
  "Principal": { "Service": "ec2.amazonaws.com" },
  "Action":    "sts:AssumeRole"
}</div>
<p>Cross-account access works the same way: account B\'s trust policy says "account A can assume me," and identities in account A call <code>sts:AssumeRole</code> to get temporary credentials.</p>` },
            { type: 'multiple-choice', prompt: 'A role\'s "trust policy" defines:',
              options: [
                { text: 'What the role can do', code: false },
                { text: 'Who is allowed to assume the role', code: false },
                { text: 'Which region the role lives in', code: false },
                { text: 'How much the role costs', code: false }
              ],
              correct: 1, explanation: 'Trust policy = WHO; permissions policy = WHAT.' },
            { type: 'true-false', statement: 'Role credentials are short-lived (typically an hour, max 12).', correct: true, explanation: 'STS returns time-bounded credentials. That\'s a key security win over long-lived keys.' },
            { type: 'type-answer', prompt: 'Which AWS STS action requests temporary credentials by adopting a role?', code: '',
              accept: ['AssumeRole', 'assumerole', 'sts:AssumeRole'],
              explanation: 'AssumeRole returns temporary access key + secret + session token.' },
            { type: 'match-pairs', prompt: 'Match each policy type → what it controls.', leftLabel: 'Policy', rightLabel: 'Controls',
              pairs: [
                { left: 'Permissions policy', right: 'WHAT the role can do' },
                { left: 'Trust policy', right: 'WHO can assume the role' },
                { left: 'Resource policy', right: 'WHO from outside can access the resource' },
                { left: 'Boundary policy', right: 'Maximum permissions an identity can have' }
              ] }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Databases on cloud ============== */
    {
      id: 'cld-u7', name: 'Unit 7 · Managed databases', description: 'SQL and NoSQL, fully managed',
      lessons: [
        {
          id: 'cld-u7-l1', name: 'Managed SQL — RDS family', icon: '🗄️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Why managed SQL is the default now', content: `<div class="code-block"><span class="com">Self-managed SQL on a VM</span>
  install MySQL/Postgres
  configure backups
  patch the OS + the DB
  set up replication
  monitor + alert
  YOUR PROBLEM

<span class="com">Managed SQL</span>
  pick engine + size
  point-in-time backups
  automated patching
  Multi-AZ failover (one checkbox)
  metrics &amp; alerts built in</div>

<div class="code-block">AWS:   RDS         (MySQL, Postgres, MariaDB, Oracle, SQL Server, Aurora)
Azure: Azure SQL  + Database for MySQL / PostgreSQL
GCP:   Cloud SQL  (MySQL, Postgres, SQL Server)
       AlloyDB    (Postgres-compatible, performance-tuned)</div>` },
            { type: 'multiple-choice', prompt: 'What does the "Multi-AZ" option on RDS give you?',
              options: [
                { text: 'Read scaling across AZs', code: false },
                { text: 'A synchronous standby in another AZ for automatic failover', code: false },
                { text: 'Faster CPU', code: false },
                { text: 'Cross-region disaster recovery', code: false }
              ],
              correct: 1, explanation: 'Multi-AZ = sync standby for HA. For read scaling, you use read replicas. For DR, cross-region.' },
            { type: 'match-pairs', prompt: 'Match cloud → managed SQL.', leftLabel: 'Cloud', rightLabel: 'Service',
              pairs: [
                { left: 'AWS', right: 'RDS / Aurora' },
                { left: 'Azure', right: 'Azure SQL Database' },
                { left: 'GCP', right: 'Cloud SQL / AlloyDB' },
                { left: 'All', right: 'Automated backups + patching' }
              ] },
            { type: 'true-false', statement: 'Aurora is just MySQL/Postgres running on EC2.', correct: false, explanation: 'Aurora re-implements the storage layer for higher throughput and faster recovery, while staying wire-compatible.' },
            { type: 'fill-blank', prompt: 'Read scaling on a managed SQL service is usually done with:',
              codeLines: [{ html: 'add a <span class="fn">_BLANK_</span> replica' }],
              tokens: ['read', 'write', 'shadow', 'backup'],
              correctAnswer: 'read',
              explanation: 'Read replicas absorb read traffic; writes still go to the primary.' }
          ]
        },
        {
          id: 'cld-u7-l2', name: 'Managed NoSQL — Dynamo / Cosmos / Firestore', icon: '🧾', xp: 25,
          challenges: [
            { type: 'concept', title: 'Key-value, document, and global tables', content: `<div class="code-block"><span class="com">AWS</span>:    DynamoDB
  key-value &amp; document
  single-digit-ms latency
  on-demand or provisioned capacity

<span class="com">Azure</span>:  Cosmos DB
  multi-model (document, graph, key-value, column-family)
  five tunable consistency levels
  global distribution built in

<span class="com">GCP</span>:    Firestore  (document, mobile-friendly, real-time listeners)
        Bigtable   (column-family, huge throughput, no SQL)</div>
<p>NoSQL services on cloud are designed for <strong>elastic throughput</strong> and <strong>predictable single-digit-ms latency</strong>, even at huge scale — at the cost of giving up multi-row joins and rich SQL.</p>` },
            { type: 'multiple-choice', prompt: 'You need a globally-distributed document DB with tunable consistency. Best fit on Azure?',
              options: [
                { text: 'Azure Files', code: false },
                { text: 'Cosmos DB', code: false },
                { text: 'Azure SQL Database', code: false },
                { text: 'Blob Storage', code: false }
              ],
              correct: 1, explanation: 'Cosmos DB is purpose-built for global distribution and lets you tune the consistency knob.' },
            { type: 'match-pairs', prompt: 'Match cloud → managed NoSQL.', leftLabel: 'Cloud', rightLabel: 'Service',
              pairs: [
                { left: 'AWS', right: 'DynamoDB' },
                { left: 'Azure', right: 'Cosmos DB' },
                { left: 'GCP (document)', right: 'Firestore' },
                { left: 'GCP (column)', right: 'Bigtable' }
              ] },
            { type: 'true-false', statement: 'DynamoDB supports SQL joins across multiple tables.', correct: false, explanation: 'DynamoDB has no joins. You denormalize and design access patterns up front.' },
            { type: 'output-predict', prompt: 'DynamoDB on-demand: you do 10 reads per second for 1 hour. Charged for:',
              code: 'mode = on-demand\n10 RPS · 3600 s',
              options: ['10 read units', '36 000 read units', 'A flat hourly rate', '1 read unit'],
              correct: 1, explanation: 'On-demand bills per request: 10 * 3600 = 36 000 read requests for the hour.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Serverless ============== */
    {
      id: 'cld-u8', name: 'Unit 8 · Serverless (FaaS)', description: 'Functions on demand, no servers to manage',
      lessons: [
        {
          id: 'cld-u8-l1', name: 'Lambda · Functions · Cloud Functions', icon: '⚡', xp: 25,
          challenges: [
            { type: 'concept', title: 'Tiny stateless functions, triggered by events', content: `<div class="code-block"><span class="com">AWS Lambda</span>
  runtime:  Python, Node, Java, Go, .NET, Ruby, custom
  trigger:  S3 upload, API Gateway, SQS, EventBridge, schedule, ...
  billed:   per ms of execution &times; memory

<span class="com">Azure Functions</span>
  runtime:  same set
  trigger:  Blob, Service Bus, HTTP, timer, EventGrid
  billed:   Consumption (per execution) or Premium (warm)

<span class="com">GCP Cloud Functions / Cloud Run Functions</span>
  runtime:  same set
  trigger:  HTTP, Pub/Sub, GCS, Eventarc, schedule</div>` },
            { type: 'multiple-choice', prompt: 'What does "serverless" actually mean?',
              options: [
                { text: 'There are literally no servers', code: false },
                { text: 'You don\'t provision or manage servers — the provider does', code: false },
                { text: 'It runs in your browser', code: false },
                { text: 'It can\'t scale', code: false }
              ],
              correct: 1, explanation: 'Servers exist — you just never see them. You write functions; the platform runs them.' },
            { type: 'true-false', statement: 'Lambda charges you while idle, even if nothing is being invoked.', correct: false, explanation: 'You pay per invocation + execution time. Zero invocations = zero compute cost.' },
            { type: 'match-pairs', prompt: 'Match cloud → FaaS product.', leftLabel: 'Cloud', rightLabel: 'FaaS',
              pairs: [
                { left: 'AWS', right: 'Lambda' },
                { left: 'Azure', right: 'Functions' },
                { left: 'GCP', right: 'Cloud Functions / Run' },
                { left: 'All', right: 'Pay-per-invocation' }
              ] },
            { type: 'output-predict', prompt: 'A Lambda runs for 200 ms at 512 MB. Roughly, what is being billed?',
              code: 'duration: 200 ms\nmemory:   512 MB',
              options: [
                'GB-seconds of execution × invocations',
                'Number of imports',
                'Lines of code',
                'Outbound bandwidth only'
              ],
              correct: 0, explanation: 'FaaS billing = duration × memory size, plus a per-invocation fee.' }
          ]
        },
        {
          id: 'cld-u8-l2', name: 'Triggers, cold starts, limits', icon: '🥶', xp: 25,
          challenges: [
            { type: 'concept', title: 'The gotchas of serverless', content: `<div class="code-block"><span class="com">Cold start</span> = first invocation after idle
  100 ms - 2 s of extra latency
  worse for big JVM/.NET runtimes
  mitigations: provisioned concurrency, lighter runtime, smaller package

<span class="com">Limits (Lambda, typical)</span>
  timeout:        15 minutes (max)
  memory:         128 MB - 10 GB
  payload:        6 MB sync, 256 KB async
  /tmp space:     up to 10 GB

<span class="com">Stateless</span> — no on-disk state survives between invocations
  store state in S3, DynamoDB, Redis, etc.</div>` },
            { type: 'multiple-choice', prompt: 'A "cold start" happens when:',
              options: [
                { text: 'The function exceeds memory', code: false },
                { text: 'A new function container is spun up after idle', code: false },
                { text: 'A region goes offline', code: false },
                { text: 'You use the wrong runtime', code: false }
              ],
              correct: 1, explanation: 'Cold start = a fresh execution environment must be initialized before your handler runs.' },
            { type: 'true-false', statement: 'You can store state on the local disk of a Lambda function and rely on it surviving.', correct: false, explanation: 'Containers are recycled. /tmp can be reused within a warm execution but is not durable.' },
            { type: 'reorder-code', prompt: 'Order the event flow when a user uploads to S3 → triggers a Lambda → writes to Dynamo.',
              lines: [
                'User uploads file to S3 bucket',
                'S3 emits ObjectCreated event',
                'Lambda function is invoked with event payload',
                'Lambda reads object and writes a row to DynamoDB'
              ],
              correctOrder: [0, 1, 2, 3] },
            { type: 'fill-blank', prompt: 'A serverless function should be ____ — no in-memory state survives.',
              codeLines: [{ html: 'function = <span class="str">"<span class="fn">_BLANK_</span>"</span>;' }],
              tokens: ['stateless', 'stateful', 'persistent', 'recursive'],
              correctAnswer: 'stateless',
              explanation: 'Lean on external stores (S3, DynamoDB, Redis) for any state you need.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — Containers as a service ============== */
    {
      id: 'cld-u9', name: 'Unit 9 · Containers as a service', description: 'ECS · EKS · AKS · GKE — the 60-second tour',
      lessons: [
        {
          id: 'cld-u9-l1', name: 'Managed containers at a glance', icon: '📦', xp: 20,
          challenges: [
            { type: 'concept', title: 'Why containers are everywhere on cloud', content: `<p>Containers package your app + its dependencies into one portable artifact. The cloud gives you <strong>managed places to run them</strong>:</p>
<div class="code-block"><span class="com">AWS</span>
  ECS        — AWS-native container scheduler
  EKS        — managed Kubernetes
  Fargate    — serverless mode (no nodes to manage)
  App Runner — push code/image, get URL

<span class="com">Azure</span>
  ACI                  — single-container, fastest start
  AKS                  — managed Kubernetes
  Container Apps        — serverless-flavored containers

<span class="com">GCP</span>
  GKE        — managed Kubernetes (Google invented k8s)
  Cloud Run  — serverless containers, scale to zero</div>
<p>This course stays at "what each one is for." Container internals and Kubernetes itself are covered in the Docker and Kubernetes courses.</p>` },
            { type: 'multiple-choice', prompt: 'Cloud Run on GCP is best described as:',
              options: [
                { text: 'A VM service', code: false },
                { text: 'A serverless container runtime (scale to zero)', code: false },
                { text: 'A static site host', code: false },
                { text: 'A managed database', code: false }
              ],
              correct: 1, explanation: 'You ship a container; Cloud Run scales it from zero to many in response to requests.' },
            { type: 'match-pairs', prompt: 'Match cloud → managed Kubernetes.', leftLabel: 'Cloud', rightLabel: 'Service',
              pairs: [
                { left: 'AWS', right: 'EKS' },
                { left: 'Azure', right: 'AKS' },
                { left: 'GCP', right: 'GKE' },
                { left: 'All', right: 'Run upstream Kubernetes' }
              ] },
            { type: 'true-false', statement: 'AWS Fargate makes you manage the EC2 nodes that run your containers.', correct: false, explanation: 'Fargate is "serverless" containers — no nodes to provision or patch.' },
            { type: 'fill-blank', prompt: 'Cloud Run\'s key trait vs a standard VM is the ability to scale to ____.',
              codeLines: [{ html: 'scaling = <span class="str">"<span class="fn">_BLANK_</span>"</span>;' }],
              tokens: ['zero', 'one', 'two', 'infinity'],
              correctAnswer: 'zero',
              explanation: 'Cloud Run (and Lambda, and Azure Functions) scale all the way down to zero when idle.' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — Messaging & queues ============== */
    {
      id: 'cld-u10', name: 'Unit 10 · Messaging & queues', description: 'Queues · pub/sub · event buses',
      lessons: [
        {
          id: 'cld-u10-l1', name: 'Queues vs pub/sub vs event buses', icon: '📨', xp: 25,
          challenges: [
            { type: 'concept', title: 'Three flavors of async messaging', content: `<div class="code-block"><span class="com">Queue (point-to-point)</span>
  one producer → one consumer (per message)
  the consumer pulls; messages durable until ack
  AWS:   SQS         Azure: Service Bus Queue        GCP: Pub/Sub w/ pull

<span class="com">Pub/Sub (fan-out)</span>
  one publisher → many subscribers
  each subscriber gets its own copy
  AWS:   SNS         Azure: Service Bus Topic         GCP: Pub/Sub

<span class="com">Event Bus</span>
  routes events from many sources to many targets by rules
  AWS:   EventBridge  Azure: Event Grid              GCP: Eventarc</div>` },
            { type: 'multiple-choice', prompt: 'You need one publisher and four independent subscribers, each seeing every message. Pick:',
              options: [
                { text: 'A queue (SQS)', code: false },
                { text: 'Pub/Sub (SNS / Service Bus Topic)', code: false },
                { text: 'A database', code: false },
                { text: 'A file in S3', code: false }
              ],
              correct: 1, explanation: 'Fan-out delivery = topic-based pub/sub.' },
            { type: 'match-pairs', prompt: 'Match cloud → simple queue.', leftLabel: 'Cloud', rightLabel: 'Queue',
              pairs: [
                { left: 'AWS', right: 'SQS' },
                { left: 'Azure', right: 'Service Bus Queue' },
                { left: 'GCP', right: 'Pub/Sub (pull subscription)' },
                { left: 'All', right: 'At-least-once delivery' }
              ] },
            { type: 'match-pairs', prompt: 'Match cloud → event bus.', leftLabel: 'Cloud', rightLabel: 'Event bus',
              pairs: [
                { left: 'AWS', right: 'EventBridge' },
                { left: 'Azure', right: 'Event Grid' },
                { left: 'GCP', right: 'Eventarc' },
                { left: 'Pattern', right: 'Rule-based routing' }
              ] },
            { type: 'true-false', statement: 'SQS delivers each message to exactly one consumer (per queue).', correct: true, explanation: 'Queues are point-to-point — once consumed and acknowledged, the message is gone.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Monitoring & logging ============== */
    {
      id: 'cld-u11', name: 'Unit 11 · Monitoring & logging', description: 'Metrics, logs, alerts, traces',
      lessons: [
        {
          id: 'cld-u11-l1', name: 'CloudWatch · Azure Monitor · Cloud Logging', icon: '📊', xp: 25,
          challenges: [
            { type: 'concept', title: 'Three signals: metrics, logs, traces', content: `<div class="code-block"><span class="com">Metrics</span> — numeric time-series (CPU%, RequestCount, ErrorRate)
<span class="com">Logs</span>    — structured or free-form text events
<span class="com">Traces</span>  — end-to-end view of a single request through N services

<span class="com">AWS</span>:   CloudWatch Metrics + Logs + X-Ray (traces)
<span class="com">Azure</span>: Azure Monitor (metrics) + Log Analytics (logs) + Application Insights
<span class="com">GCP</span>:   Cloud Monitoring + Cloud Logging + Cloud Trace</div>
<p>Alerts ride on metrics ("CPU &gt; 80% for 5 min → page on-call"). Dashboards combine metrics from many services. Logs are the post-mortem material.</p>` },
            { type: 'multiple-choice', prompt: 'You want to alert when error rate goes above 1% for 5 minutes. Which signal type?',
              options: [
                { text: 'A trace', code: false },
                { text: 'A metric (with a threshold alarm)', code: false },
                { text: 'A log line', code: false },
                { text: 'A snapshot', code: false }
              ],
              correct: 1, explanation: 'Numeric time-series + threshold = metric alarm.' },
            { type: 'match-pairs', prompt: 'Match cloud → logging product.', leftLabel: 'Cloud', rightLabel: 'Logs',
              pairs: [
                { left: 'AWS', right: 'CloudWatch Logs' },
                { left: 'Azure', right: 'Log Analytics' },
                { left: 'GCP', right: 'Cloud Logging' },
                { left: 'Cross-cloud', right: 'OpenTelemetry' }
              ] },
            { type: 'tap-tokens', prompt: 'Build a CloudWatch alarm description: "CPU > 80% for 5 min".',
              tokens: ['CPU', '>', '80%', 'for', '5', 'min', 'memory', '<'],
              correctOrder: ['CPU', '>', '80%', 'for', '5', 'min'],
              explanation: 'A metric, an operator, a threshold, and a duration is the full alarm shape.' },
            { type: 'true-false', statement: 'Distributed tracing helps explain why a single user request was slow across many services.', correct: true, explanation: 'That\'s literally what traces are for — end-to-end timing per span.' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — Cost optimization ============== */
    {
      id: 'cld-u12', name: 'Unit 12 · Cost optimization', description: 'Spend less without changing what you ship',
      lessons: [
        {
          id: 'cld-u12-l1', name: 'Reserved, spot, right-sizing', icon: '💸', xp: 25,
          challenges: [
            { type: 'concept', title: 'Pricing levers you should know', content: `<div class="code-block"><span class="com">On-demand</span>   = pay full sticker price per second
<span class="com">Reserved</span>    = commit 1y/3y, save 30-70%
              AWS: Reserved Instances / Savings Plans
              Azure: Reservations / Savings Plan for Compute
              GCP: Committed Use Discounts (CUDs)

<span class="com">Spot</span>        = bid for spare capacity, save 70-90%
              can be reclaimed with 2-min warning
              AWS Spot · Azure Spot VMs · GCP Spot VMs
              good for: batch, fault-tolerant workloads

<span class="com">Right-sizing</span>  = match instance size to actual usage
              an m5.4xlarge running at 5% CPU is money on fire

<span class="com">Storage tiering</span> + <span class="com">lifecycle</span> rules — see Unit 4</div>` },
            { type: 'multiple-choice', prompt: 'Best price tier for a batch job that can tolerate interruption?',
              options: [
                { text: 'On-demand', code: false },
                { text: '3-year Reserved', code: false },
                { text: 'Spot', code: false },
                { text: 'Dedicated host', code: false }
              ],
              correct: 2, explanation: 'Spot is 70-90% cheaper but can be reclaimed. Perfect for restartable batch.' },
            { type: 'multiple-choice', prompt: 'You commit to 3-year Reserved Instances for a workload that turns out to scale down 6 months in. What happens?',
              options: [
                { text: 'You get a refund', code: false },
                { text: 'You keep paying for capacity you don\'t need', code: false },
                { text: 'AWS automatically downsizes', code: false },
                { text: 'The commitment is cancelled', code: false }
              ],
              correct: 1, explanation: 'Reservations are a commitment — savings up front, but only if you actually use it. Use Savings Plans for more flexibility.' },
            { type: 'match-pairs', prompt: 'Match purchase option → typical savings vs on-demand.', leftLabel: 'Option', rightLabel: 'Savings',
              pairs: [
                { left: 'On-demand', right: '0% (baseline)' },
                { left: 'Reserved 1y', right: '~30-40%' },
                { left: 'Reserved 3y', right: '~50-70%' },
                { left: 'Spot', right: '~70-90% (interruptible)' }
              ] },
            { type: 'true-false', statement: 'Cost tagging (e.g., env=prod, team=billing) helps allocate spend to teams.', correct: true, explanation: 'Tags drive cost-allocation reports. Without them, large cloud bills are a black box.' },
            { type: 'type-answer', prompt: 'What is the name of the cloud cost discipline that combines engineering, finance, and ops?', code: '',
              accept: ['FinOps', 'finops'],
              explanation: 'FinOps is the practice of bringing financial accountability to variable cloud spend.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — Infrastructure as Code ============== */
    {
      id: 'cld-u13', name: 'Unit 13 · Infrastructure as Code', description: 'Click less, declare more',
      lessons: [
        {
          id: 'cld-u13-l1', name: 'Terraform, CloudFormation, ARM/Bicep, Pulumi', icon: '📜', xp: 25,
          challenges: [
            { type: 'concept', title: 'Declare infrastructure as files in git', content: `<div class="code-block"><span class="com">Why IaC?</span>
  reproducible    — same env in dev, staging, prod
  version-controlled — diffs, code review, rollback
  fast to recreate — disaster recovery becomes "rerun"
  fewer console clicks → fewer mistakes

<span class="com">The major tools</span>
  Terraform        — HashiCorp, multi-cloud, HCL syntax
  CloudFormation   — AWS-only, JSON/YAML
  ARM / Bicep      — Azure-native (Bicep is the modern DSL)
  Google Deployment Manager / Config Connector — GCP-native
  Pulumi           — multi-cloud, real programming languages (TS, Python, Go)</div>` },
            { type: 'multiple-choice', prompt: 'A key advantage of Terraform over CloudFormation is:',
              options: [
                { text: 'It runs faster', code: false },
                { text: 'It works across multiple clouds with one tool', code: false },
                { text: 'It writes itself', code: false },
                { text: 'It\'s free; CloudFormation costs money', code: false }
              ],
              correct: 1, explanation: 'Terraform is multi-cloud (AWS, Azure, GCP, hundreds of providers). CloudFormation is AWS-only.' },
            { type: 'match-pairs', prompt: 'Match tool → cloud / scope.', leftLabel: 'Tool', rightLabel: 'Scope',
              pairs: [
                { left: 'Terraform', right: 'Multi-cloud (HCL)' },
                { left: 'CloudFormation', right: 'AWS-only' },
                { left: 'Bicep', right: 'Azure-native' },
                { left: 'Pulumi', right: 'Multi-cloud (real code)' }
              ] },
            { type: 'concept', title: 'A tiny Terraform example', content: `<div class="code-block">resource <span class="str">"aws_s3_bucket"</span> <span class="str">"reports"</span> {
  bucket = <span class="str">"acme-reports-prod"</span>
  tags = {
    env  = <span class="str">"prod"</span>
    team = <span class="str">"data"</span>
  }
}

resource <span class="str">"aws_s3_bucket_versioning"</span> <span class="str">"v"</span> {
  bucket = aws_s3_bucket.reports.id
  versioning_configuration {
    status = <span class="str">"Enabled"</span>
  }
}</div>
<p><code>terraform plan</code> shows what will change. <code>terraform apply</code> makes it real. A <strong>state file</strong> tracks what currently exists so the next plan can diff.</p>` },
            { type: 'true-false', statement: 'A Terraform state file should be stored in source control (e.g. committed to git).', correct: false, explanation: 'State can contain secrets and is updated on every apply — store it in a remote backend (S3 + lock, Terraform Cloud), not in git.' },
            { type: 'fill-blank', prompt: 'The Terraform command that shows what changes WILL be applied is:',
              codeLines: [{ html: '$ terraform <span class="fn">_BLANK_</span>' }],
              tokens: ['plan', 'apply', 'destroy', 'init'],
              correctAnswer: 'plan',
              explanation: '<code>plan</code> = dry-run; <code>apply</code> = make changes; <code>destroy</code> = tear down; <code>init</code> = set up the working dir.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — Cloud security ============== */
    {
      id: 'cld-u14', name: 'Unit 14 · Cloud security fundamentals', description: 'Shared responsibility · encryption · KMS',
      lessons: [
        {
          id: 'cld-u14-l1', name: 'Shared responsibility model', icon: '🛡️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Who secures what', content: `<div class="code-block"><span class="com">Provider is responsible for security OF the cloud</span>
  physical datacenter
  hypervisor &amp; host OS
  hardware
  global network

<span class="com">You are responsible for security IN the cloud</span>
  guest OS patching (IaaS only)
  app code &amp; libraries
  identity &amp; access (IAM)
  data classification &amp; encryption keys
  network config (security groups, NACLs)</div>
<p>The line shifts up as you go IaaS → PaaS → SaaS. With SaaS, almost everything is the provider\'s job — but <strong>identity, access, and data</strong> are always yours.</p>` },
            { type: 'multiple-choice', prompt: 'In IaaS, who is responsible for OS patches on the VMs you run?',
              options: [
                { text: 'The provider', code: false },
                { text: 'You', code: false },
                { text: 'No one', code: false },
                { text: 'Shared 50/50', code: false }
              ],
              correct: 1, explanation: 'IaaS = your OS, your patches. The provider handles the hypervisor and below.' },
            { type: 'match-pairs', prompt: 'Match service model → who patches the OS.', leftLabel: 'Model', rightLabel: 'Patches OS',
              pairs: [
                { left: 'IaaS', right: 'You' },
                { left: 'PaaS', right: 'Provider' },
                { left: 'SaaS', right: 'Provider' },
                { left: 'FaaS', right: 'Provider' }
              ] },
            { type: 'true-false', statement: 'A misconfigured S3 bucket open to the world is the provider\'s problem.', correct: false, explanation: 'Bucket policies are 100% the customer\'s responsibility. This is the #1 root cause of "cloud" breaches.' },
            { type: 'fill-blank', prompt: 'No matter the model, this is ALWAYS the customer\'s job:',
              codeLines: [{ html: 'always_yours = <span class="str">"<span class="fn">_BLANK_</span> and access"</span>;' }],
              tokens: ['identity', 'hypervisor', 'datacenter', 'hardware'],
              correctAnswer: 'identity',
              explanation: 'Identity, access, and your data are always your responsibility, in every service model.' }
          ]
        },
        {
          id: 'cld-u14-l2', name: 'Encryption & key management', icon: '🔑', xp: 25,
          challenges: [
            { type: 'concept', title: 'At rest, in transit, and the key vault', content: `<div class="code-block"><span class="com">Encryption at rest</span>
  data on disk / in storage is encrypted
  on by default in most managed services now
  uses AES-256 under the hood

<span class="com">Encryption in transit</span>
  TLS between client and service
  cross-AZ traffic — assume someone might watch the wire

<span class="com">Key management services (KMS)</span>
  AWS KMS    · Azure Key Vault    · Google Cloud KMS
  customer-managed keys (CMK), key rotation, audit trails

<span class="com">Customer-managed vs provider-managed keys</span>
  provider-managed: easy, opaque
  customer-managed: you control rotation, deletion, who can use them
  HYOK / BYOK:       advanced — you supply / hold the key</div>` },
            { type: 'multiple-choice', prompt: 'A customer-managed KMS key gives you what a provider-managed key does not?',
              options: [
                { text: 'Stronger AES algorithms', code: false },
                { text: 'Control over rotation, access policies, and audit visibility', code: false },
                { text: 'Cheaper storage', code: false },
                { text: 'Faster encryption', code: false }
              ],
              correct: 1, explanation: 'CMKs let YOU define who can use them, when they rotate, and you see every use in audit logs.' },
            { type: 'match-pairs', prompt: 'Match cloud → KMS product.', leftLabel: 'Cloud', rightLabel: 'KMS',
              pairs: [
                { left: 'AWS', right: 'AWS KMS' },
                { left: 'Azure', right: 'Key Vault' },
                { left: 'GCP', right: 'Cloud KMS' },
                { left: 'Standard cipher', right: 'AES-256' }
              ] },
            { type: 'true-false', statement: 'TLS protects data "in transit" — meaning while it\'s moving over the network.', correct: true, explanation: 'Yes. "At rest" = on disk; "in transit" = on the wire.' },
            { type: 'output-predict', prompt: 'KMS Customer Master Key has rotation = enabled, annual. After 2 years, how many key versions exist?',
              code: 'rotation: 1 year\nage: 2 years',
              options: ['1', '2', '3', 'unlimited'],
              correct: 2, explanation: 'Original + year-1 rotation + year-2 rotation = 3 versions. Old versions stay around to decrypt old data.' }
          ]
        }
      ]
    },

    /* ============== UNIT 15 — HA & DR ============== */
    {
      id: 'cld-u15', name: 'Unit 15 · High availability & DR', description: 'Multi-AZ, multi-region, RTO/RPO, backups',
      lessons: [
        {
          id: 'cld-u15-l1', name: 'RTO, RPO, and the DR ladder', icon: '🚑', xp: 25,
          challenges: [
            { type: 'concept', title: 'How fast must you recover; how much can you lose?', content: `<div class="code-block"><span class="com">RTO — Recovery Time Objective</span>
  how long can the service stay DOWN after a disaster?
  smaller RTO = more expensive

<span class="com">RPO — Recovery Point Objective</span>
  how much DATA can you afford to lose?
  smaller RPO = more frequent replication

<span class="com">DR strategies (cheap → expensive)</span>
  Backup &amp; restore   — RTO hours, RPO hours
  Pilot light        — minimal infra warm in DR region
  Warm standby       — scaled-down full stack ready
  Active-active      — both regions serving live traffic; RTO ~0, RPO ~0</div>` },
            { type: 'multiple-choice', prompt: 'Your boss says "we can lose at most 5 minutes of data." That\'s a constraint on:',
              options: [
                { text: 'RTO', code: false },
                { text: 'RPO', code: false },
                { text: 'SLA', code: false },
                { text: 'SLO', code: false }
              ],
              correct: 1, explanation: 'RPO = data-loss tolerance. RTO = downtime tolerance.' },
            { type: 'match-pairs', prompt: 'Match DR strategy → typical RTO.', leftLabel: 'Strategy', rightLabel: 'RTO',
              pairs: [
                { left: 'Backup & restore', right: 'Hours' },
                { left: 'Pilot light', right: 'Tens of minutes' },
                { left: 'Warm standby', right: 'Minutes' },
                { left: 'Active-active', right: 'Seconds (near zero)' }
              ] },
            { type: 'reorder-code', prompt: 'Order DR strategies from CHEAPEST (and slowest recovery) to MOST EXPENSIVE (and fastest).',
              lines: [
                'Backup & restore',
                'Pilot light',
                'Warm standby',
                'Active-active multi-region'
              ],
              correctOrder: [0, 1, 2, 3] },
            { type: 'tap-tokens', prompt: 'Spell out the acronyms in order.',
              tokens: ['RTO', '=', 'time', 'RPO', '=', 'data', 'loss'],
              correctOrder: ['RTO', '=', 'time', 'RPO', '=', 'data', 'loss'],
              explanation: 'RTO targets downtime; RPO targets data loss.' },
            { type: 'true-false', statement: 'Active-active multi-region is the cheapest DR strategy.', correct: false, explanation: 'It\'s the most expensive — you\'re running full capacity in two regions all the time. But RTO and RPO are near zero.' }
          ]
        },
        {
          id: 'cld-u15-l2', name: 'Multi-AZ vs multi-region patterns', icon: '🗺️', xp: 30,
          challenges: [
            { type: 'concept', title: 'Pick the right scope for the right failure', content: `<div class="code-block"><span class="com">Single-AZ</span>
  one datacenter outage takes you down
  cheapest, easiest
  good for: dev, batch, non-critical

<span class="com">Multi-AZ (same region)</span>
  survives one datacenter going dark
  ~1-2 ms cross-AZ latency
  standard HA pattern for production

<span class="com">Multi-region active-passive</span>
  warm copy in another region
  fail over with DNS (Route 53, Traffic Manager, Cloud DNS)
  RTO minutes, RPO seconds-minutes

<span class="com">Multi-region active-active</span>
  both regions serve live traffic
  needs careful data replication (CRDTs, global tables, ...)
  highest cost + complexity</div>
<p>Most production systems land on <strong>multi-AZ + nightly backups</strong>. The leap to multi-region is justified only when downtime cost &gt; the (significant) infra + complexity cost.</p>` },
            { type: 'multiple-choice', prompt: 'A multi-AZ setup protects against:',
              options: [
                { text: 'Regional natural disasters', code: false },
                { text: 'Provider-wide outages', code: false },
                { text: 'Single-datacenter failures inside a region', code: false },
                { text: 'Bad code deploys', code: false }
              ],
              correct: 2, explanation: 'Multi-AZ handles datacenter-scale failures. For regional disasters, you need multi-region.' },
            { type: 'multiple-choice', prompt: 'Which is the typical mechanism for steering traffic between regions on failover?',
              options: [
                { text: 'Editing /etc/hosts on every client', code: false },
                { text: 'DNS — Route 53 / Traffic Manager / Cloud DNS', code: false },
                { text: 'BGP route hijack', code: false },
                { text: 'Restarting the load balancer', code: false }
              ],
              correct: 1, explanation: 'Failover-aware DNS is the universal pattern across all three clouds.' },
            { type: 'match-pairs', prompt: 'Match cloud → its smart-DNS / failover service.', leftLabel: 'Cloud', rightLabel: 'DNS / failover',
              pairs: [
                { left: 'AWS', right: 'Route 53' },
                { left: 'Azure', right: 'Traffic Manager / Front Door' },
                { left: 'GCP', right: 'Cloud DNS / Cloud Load Balancing' },
                { left: 'Concept', right: 'Health-checked DNS' }
              ] },
            { type: 'true-false', statement: 'Backups alone are a complete DR strategy.', correct: false, explanation: 'Backups are necessary but not sufficient — you also need a tested restore plan and infra to restore INTO.' },
            { type: 'output-predict', prompt: 'RTO target = 1 hour. Backups take 90 minutes to restore. Will you meet RTO?',
              code: 'RTO target: 60 min\nrestore time: 90 min',
              options: ['Yes', 'No', 'Only on Tuesdays', 'Depends on the data'],
              correct: 1, explanation: 'Restore alone exceeds RTO — you need pilot light / warm standby to hit a 1-hour RTO.' }
          ]
        }
      ]
    }

  ]
});
