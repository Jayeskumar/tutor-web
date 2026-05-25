LEARN('kubernetes', {
  intro: 'A practical, end-to-end tour of Kubernetes — the open-source platform that runs containers at scale.',
  chapters: [

    /* ============== Chapter 1 ============== */
    {
      id: 'k8s-c1',
      title: 'What is Kubernetes?',
      icon: '⎈',
      sections: [
        { type: 'heading', text: 'Kubernetes in one sentence', level: 1 },
        { type: 'para', html: '<strong>Kubernetes (K8s)</strong> is a platform for running containerized workloads across a cluster of machines. You declare what you want — <em>"give me 3 copies of this web app, expose it on port 80, restart it if it crashes"</em> — and Kubernetes makes reality match. Continuously.' },
        { type: 'para', html: 'The name comes from the Greek for "helmsman" — the same root that gives us "governor." The abbreviation <strong>K8s</strong> has 8 letters between the K and s.' },

        { type: 'heading', text: 'Why orchestration matters', level: 2 },
        { type: 'para', html: 'One container is easy. <strong>Hundreds of containers across dozens of machines</strong> is not. You suddenly need answers to:' },
        { type: 'list', kind: 'bullet', items: [
          'Which machine should run this container?',
          'What happens when the machine dies?',
          'How do other containers find this one?',
          'How do I roll out a new version without downtime?',
          'How do I add more copies under load?',
          'How do I update config without rebuilding the image?'
        ] },
        { type: 'para', html: 'Kubernetes is an opinionated answer to all of these. Think of it as an <strong>"ops team in a box"</strong> — automating the work a 24/7 on-call crew used to do by hand.' },

        { type: 'heading', text: 'Declarative, not imperative', level: 2 },
        { type: 'code', lang: 'yaml', code: `<span class="com"># You write a YAML describing the DESIRED state</span>
<span class="kw">apiVersion:</span> apps/v1
<span class="kw">kind:</span> Deployment
<span class="kw">metadata:</span>
  <span class="kw">name:</span> web
<span class="kw">spec:</span>
  <span class="kw">replicas:</span> <span class="num">3</span>
  <span class="kw">template:</span>
    <span class="kw">spec:</span>
      <span class="kw">containers:</span>
      - <span class="kw">name:</span> web
        <span class="kw">image:</span> nginx:<span class="num">1.27</span></div>` },
        { type: 'para', html: 'You don\'t say <em>how</em> to get there. A series of <strong>controllers</strong> watches the spec and observed state, and works out the diff: <em>"There are 2 Pods running, the spec says 3, create one more."</em> This idea — reconciliation toward declared state — is K8s\' core abstraction.' },

        { type: 'callout', kind: 'info', html: 'K8s does <em>not</em> care how the container image was built. It just orchestrates already-built containers. Building images is Docker/buildpacks/Bazel territory.' },

        { type: 'heading', text: 'What Kubernetes is not', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          'It\'s not a PaaS like Heroku — it doesn\'t handle source code or CI/CD.',
          'It\'s not a CI system. You still need GitHub Actions, GitLab CI, etc.',
          'It\'s not a service mesh — though it integrates with Istio, Linkerd, etc.',
          'It\'s not a database — but it can run databases (carefully).',
          'It\'s not magic — misconfigured clusters fail in spectacular ways.'
        ] },

        { type: 'callout', kind: 'tip', html: 'If you\'re new: don\'t try to run a production cluster on day one. Use <code>kind</code>, <code>minikube</code>, or Docker Desktop\'s K8s mode to play locally first.' }
      ]
    },

    /* ============== Chapter 2 ============== */
    {
      id: 'k8s-c2',
      title: 'Architecture',
      icon: '🧠',
      sections: [
        { type: 'heading', text: 'Two kinds of machines: control plane and nodes', level: 1 },
        { type: 'para', html: 'A Kubernetes cluster is a set of machines (physical or virtual) with two roles. <strong>Control-plane nodes</strong> make decisions. <strong>Worker nodes</strong> run your containers. Larger clusters often have multiple of each for high availability.' },

        { type: 'image', alt: 'Kubernetes architecture: control plane and worker nodes',
          svg: `<svg viewBox="0 0 800 360" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.cp{fill:#e0e7ff;stroke:#3949ab;stroke-width:2}.w{fill:#dcfce7;stroke:#15803d;stroke-width:2}.b{fill:#fff;stroke:#475569;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:16px;font-weight:700;fill:#0f172a;text-anchor:middle}.ti{font-family:Inter,sans-serif;font-size:11px;fill:#475569;text-anchor:middle}.lab{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#1e293b;text-anchor:middle}.arr{stroke:#475569;stroke-width:1.5;fill:none;marker-end:url(#ar)}</style>
  <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker>
</defs>
<rect x="20" y="30" width="360" height="300" rx="12" class="cp"/>
<text x="200" y="55" class="lab">Control Plane</text>
<rect x="50" y="80" width="140" height="60" rx="8" class="b"/>
<text x="120" y="105" class="t">kube-apiserver</text>
<text x="120" y="125" class="ti">REST front door</text>
<rect x="210" y="80" width="140" height="60" rx="8" class="b"/>
<text x="280" y="105" class="t">etcd</text>
<text x="280" y="125" class="ti">cluster state store</text>
<rect x="50" y="160" width="140" height="60" rx="8" class="b"/>
<text x="120" y="185" class="t">kube-scheduler</text>
<text x="120" y="205" class="ti">picks node for Pod</text>
<rect x="210" y="160" width="140" height="60" rx="8" class="b"/>
<text x="280" y="180" class="t">controller-manager</text>
<text x="280" y="195" class="ti">reconcile loops</text>
<text x="280" y="210" class="ti">(replica, node, job, ...)</text>
<rect x="50" y="240" width="300" height="60" rx="8" class="b"/>
<text x="200" y="265" class="t">cloud-controller-manager (managed K8s)</text>
<text x="200" y="285" class="ti">bridges to LB, volumes, nodes API</text>

<rect x="420" y="30" width="360" height="300" rx="12" class="w"/>
<text x="600" y="55" class="lab">Worker Nodes</text>
<rect x="450" y="80" width="140" height="60" rx="8" class="b"/>
<text x="520" y="105" class="t">kubelet</text>
<text x="520" y="125" class="ti">node agent</text>
<rect x="610" y="80" width="140" height="60" rx="8" class="b"/>
<text x="680" y="105" class="t">kube-proxy</text>
<text x="680" y="125" class="ti">Service networking</text>
<rect x="450" y="160" width="300" height="60" rx="8" class="b"/>
<text x="600" y="185" class="t">container runtime</text>
<text x="600" y="205" class="ti">containerd / CRI-O</text>
<rect x="450" y="240" width="300" height="60" rx="8" class="b"/>
<text x="600" y="265" class="t">your Pods</text>
<text x="600" y="285" class="ti">one or more containers each</text>

<line x1="380" y1="180" x2="420" y2="180" class="arr"/>
<text x="400" y="170" class="ti">API</text>
</svg>` },

        { type: 'heading', text: 'Control-plane components', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>kube-apiserver</strong> — every read/write goes through here. It is the only component that talks to etcd.',
          '<strong>etcd</strong> — a distributed key-value store. The source of truth. If etcd loses data, the cluster forgets itself.',
          '<strong>kube-scheduler</strong> — watches for unscheduled Pods and picks a node based on resources, taints, affinity, etc.',
          '<strong>controller-manager</strong> — a process running many reconcile loops: ReplicaSet, Node, Job, ServiceAccount, ...',
          '<strong>cloud-controller-manager</strong> — talks to the cloud provider for load balancers, volumes, nodes.'
        ] },

        { type: 'heading', text: 'Worker-node components', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>kubelet</strong> — the agent on every node. Watches the API server for Pods assigned to it and tells the runtime to start/stop containers.',
          '<strong>kube-proxy</strong> — programs iptables (or IPVS) so Service IPs route to the right Pods.',
          '<strong>container runtime</strong> — containerd or CRI-O. Pulls images, starts/stops containers via the CRI (Container Runtime Interface).',
          '<strong>CNI plugin</strong> — handles Pod networking (Calico, Cilium, Flannel, ...).'
        ] },

        { type: 'heading', text: 'What happens on kubectl apply', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          '<code>kubectl</code> sends the spec to the kube-apiserver over HTTPS.',
          'The API server validates and persists the object to etcd.',
          'A controller notices: <em>"a new Deployment exists but no ReplicaSet yet"</em> and creates one. The ReplicaSet controller in turn creates Pods.',
          'Each Pod is initially unscheduled. The scheduler picks a node and updates the Pod\'s <code>spec.nodeName</code>.',
          'The kubelet on that node sees a Pod assigned to it, asks the container runtime to pull images, and starts containers.',
          'Status flows back: kubelet updates Pod status → API server → etcd. The next <code>kubectl get</code> sees the new state.'
        ] },

        { type: 'callout', kind: 'tip', html: 'Two-second mental model: everyone talks to <code>kube-apiserver</code>. Nothing talks to etcd except the API server. Memorize this and the failure modes make sense.' }
      ]
    },

    /* ============== Chapter 3 ============== */
    {
      id: 'k8s-c3',
      title: 'Pods',
      icon: '📦',
      sections: [
        { type: 'heading', text: 'Pods: the smallest deployable unit', level: 1 },
        { type: 'para', html: 'A <strong>Pod</strong> wraps one or more containers that share a network namespace and (optionally) volumes. Pods are always scheduled together, started together, and torn down together. Even when there is just one container — which is the common case — K8s wraps it in a Pod.' },

        { type: 'image', alt: 'Pod with two containers sharing network and a volume',
          svg: `<svg viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.pod{fill:#fef3c7;stroke:#92400e;stroke-width:2;stroke-dasharray:6,4}.c{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.v{fill:#fce7f3;stroke:#be185d;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#0f172a;text-anchor:middle}.ti{font-family:Inter,sans-serif;font-size:11px;fill:#475569;text-anchor:middle}</style>
</defs>
<rect x="30" y="30" width="640" height="220" rx="14" class="pod"/>
<text x="350" y="55" class="tb">Pod — shared network namespace (one IP)</text>
<rect x="70" y="80" width="220" height="100" rx="10" class="c"/>
<text x="180" y="110" class="tb">container: web</text>
<text x="180" y="135" class="t">nginx:1.27</text>
<text x="180" y="158" class="ti">port 80 inside the Pod</text>
<rect x="410" y="80" width="220" height="100" rx="10" class="c"/>
<text x="520" y="110" class="tb">container: logger</text>
<text x="520" y="135" class="t">fluentd</text>
<text x="520" y="158" class="ti">reads /var/log/app/*</text>
<rect x="220" y="195" width="260" height="40" rx="8" class="v"/>
<text x="350" y="220" class="t">shared volume: /var/log/app  (emptyDir)</text>
<line x1="180" y1="180" x2="320" y2="195" stroke="#be185d" stroke-width="1.5" stroke-dasharray="3,3"/>
<line x1="520" y1="180" x2="400" y2="195" stroke="#be185d" stroke-width="1.5" stroke-dasharray="3,3"/>
</svg>` },

        { type: 'heading', text: 'What "sharing a network namespace" means', level: 2 },
        { type: 'list', kind: 'check', items: [
          'All containers in the Pod see the same loopback (<code>localhost</code>).',
          'They cannot listen on the <em>same</em> port (it\'s one interface!).',
          'The Pod itself gets a cluster-wide IP — every container shares it.',
          'For traffic from outside, you usually go through a Service, not the Pod IP.'
        ] },

        { type: 'heading', text: 'A minimal Pod', level: 2 },
        { type: 'code', lang: 'yaml', code: `<span class="kw">apiVersion:</span> v1
<span class="kw">kind:</span> Pod
<span class="kw">metadata:</span>
  <span class="kw">name:</span> nginx
  <span class="kw">labels:</span>
    <span class="kw">app:</span> web
<span class="kw">spec:</span>
  <span class="kw">containers:</span>
  - <span class="kw">name:</span> nginx
    <span class="kw">image:</span> nginx:<span class="num">1.27</span>
    <span class="kw">ports:</span>
    - <span class="kw">containerPort:</span> <span class="num">80</span>
    <span class="kw">resources:</span>
      <span class="kw">requests:</span> { cpu: <span class="str">"100m"</span>, memory: <span class="str">"128Mi"</span> }
      <span class="kw">limits:</span>   { cpu: <span class="str">"500m"</span>, memory: <span class="str">"256Mi"</span> }` },

        { type: 'callout', kind: 'warn', html: 'You almost never create raw Pods. They have no self-healing — if the node dies, the Pod is gone. Use a Deployment (or StatefulSet, DaemonSet, Job) to manage Pods.' },

        { type: 'heading', text: 'Multi-container patterns', level: 2 },
        { type: 'para', html: 'When does one Pod hold more than one container? Three classic patterns:' },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Sidecar</strong> — a helper alongside the main app. Log shippers, file syncers, service-mesh proxies (Envoy, Linkerd).',
          '<strong>Ambassador</strong> — a proxy that simplifies external calls. e.g., a Redis cluster proxy that hides sharding from the app.',
          '<strong>Adapter</strong> — normalizes the main app\'s output for the outside world. e.g., reformats logs/metrics to a standard shape.'
        ] },

        { type: 'heading', text: 'Init containers', level: 2 },
        { type: 'para', html: 'Need to run a setup step <em>before</em> the main container starts? Use <code>initContainers</code>. They run sequentially to completion before the main containers are even started.' },
        { type: 'code', lang: 'yaml', code: `<span class="kw">spec:</span>
  <span class="kw">initContainers:</span>
  - <span class="kw">name:</span> migrate
    <span class="kw">image:</span> myapp:v2
    <span class="kw">command:</span> [<span class="str">"./migrate"</span>]
  <span class="kw">containers:</span>
  - <span class="kw">name:</span> app
    <span class="kw">image:</span> myapp:v2` },

        { type: 'callout', kind: 'tip', html: '<code>kubectl get pod</code> READY column counts main containers only. <code>1/1</code> for a one-container Pod, <code>2/2</code> for a sidecar Pod, regardless of how many init containers ran.' }
      ]
    },

    /* ============== Chapter 4 ============== */
    {
      id: 'k8s-c4',
      title: 'Deployments & ReplicaSets',
      icon: '🔁',
      sections: [
        { type: 'heading', text: 'The workhorse for stateless apps', level: 1 },
        { type: 'para', html: 'A <strong>Deployment</strong> is the resource you\'ll use 90% of the time. It declares how many copies of a Pod you want, what image they run, and what to do during an upgrade. It owns a <strong>ReplicaSet</strong>, which in turn owns the <strong>Pods</strong>.' },

        { type: 'image', alt: 'Deployment owns ReplicaSet owns Pods',
          svg: `<svg viewBox="0 0 800 260" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.d{fill:#e0e7ff;stroke:#3949ab;stroke-width:2}.r{fill:#fef3c7;stroke:#92400e;stroke-width:2}.p{fill:#dcfce7;stroke:#15803d;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:13px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:15px;font-weight:700;fill:#0f172a;text-anchor:middle}.arr{stroke:#475569;stroke-width:1.5;fill:none;marker-end:url(#ar4)}</style>
  <marker id="ar4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker>
</defs>
<rect x="40" y="100" width="170" height="80" rx="10" class="d"/>
<text x="125" y="135" class="tb">Deployment</text>
<text x="125" y="160" class="t">web</text>
<rect x="290" y="100" width="170" height="80" rx="10" class="r"/>
<text x="375" y="135" class="tb">ReplicaSet</text>
<text x="375" y="160" class="t">web-7b5fcd</text>
<rect x="540" y="30" width="200" height="50" rx="10" class="p"/>
<text x="640" y="60" class="tb">Pod web-7b5fcd-a1</text>
<rect x="540" y="100" width="200" height="50" rx="10" class="p"/>
<text x="640" y="130" class="tb">Pod web-7b5fcd-b2</text>
<rect x="540" y="170" width="200" height="50" rx="10" class="p"/>
<text x="640" y="200" class="tb">Pod web-7b5fcd-c3</text>
<line x1="210" y1="140" x2="290" y2="140" class="arr"/>
<line x1="460" y1="140" x2="540" y2="55" class="arr"/>
<line x1="460" y1="140" x2="540" y2="125" class="arr"/>
<line x1="460" y1="140" x2="540" y2="195" class="arr"/>
</svg>` },

        { type: 'heading', text: 'A full Deployment manifest', level: 2 },
        { type: 'code', lang: 'yaml', code: `<span class="kw">apiVersion:</span> apps/v1
<span class="kw">kind:</span> Deployment
<span class="kw">metadata:</span>
  <span class="kw">name:</span> web
<span class="kw">spec:</span>
  <span class="kw">replicas:</span> <span class="num">3</span>
  <span class="kw">selector:</span>
    <span class="kw">matchLabels:</span>
      <span class="kw">app:</span> web
  <span class="kw">strategy:</span>
    <span class="kw">type:</span> RollingUpdate
    <span class="kw">rollingUpdate:</span>
      <span class="kw">maxSurge:</span> <span class="num">1</span>
      <span class="kw">maxUnavailable:</span> <span class="num">0</span>
  <span class="kw">template:</span>
    <span class="kw">metadata:</span>
      <span class="kw">labels:</span>
        <span class="kw">app:</span> web
    <span class="kw">spec:</span>
      <span class="kw">containers:</span>
      - <span class="kw">name:</span> web
        <span class="kw">image:</span> nginx:<span class="num">1.27</span>` },

        { type: 'callout', kind: 'info', html: 'The labels in <code>spec.template.metadata.labels</code> MUST match <code>spec.selector.matchLabels</code> — otherwise the Deployment can\'t find the Pods it just created. Confusing on day one. Mechanical after day two.' },

        { type: 'heading', text: 'Rolling updates in slow motion', level: 2 },
        { type: 'para', html: 'You change the image tag and <code>kubectl apply</code>. K8s creates a NEW ReplicaSet (different pod-template-hash), scales it up while scaling the old one down, respecting <code>maxSurge</code> (how many extra Pods allowed) and <code>maxUnavailable</code> (how many can be down at once).' },

        { type: 'image', alt: 'Rolling update progression',
          svg: `<svg viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.old{fill:#fee2e2;stroke:#991b1b;stroke-width:1.5}.new{fill:#dcfce7;stroke:#15803d;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:13px;font-weight:700;fill:#0f172a}.head{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#1e293b}</style>
</defs>
<text x="20" y="30" class="head">t=0 — only old Pods</text>
<rect x="20" y="40" width="60" height="40" rx="6" class="old"/><text x="50" y="65" class="t">old</text>
<rect x="90" y="40" width="60" height="40" rx="6" class="old"/><text x="120" y="65" class="t">old</text>
<rect x="160" y="40" width="60" height="40" rx="6" class="old"/><text x="190" y="65" class="t">old</text>

<text x="20" y="115" class="head">t=1 — surge: a new Pod is starting</text>
<rect x="20" y="125" width="60" height="40" rx="6" class="old"/><text x="50" y="150" class="t">old</text>
<rect x="90" y="125" width="60" height="40" rx="6" class="old"/><text x="120" y="150" class="t">old</text>
<rect x="160" y="125" width="60" height="40" rx="6" class="old"/><text x="190" y="150" class="t">old</text>
<rect x="230" y="125" width="60" height="40" rx="6" class="new"/><text x="260" y="150" class="t">new</text>

<text x="20" y="195" class="head">t=2 — new Pod is Ready → drop an old Pod</text>
<rect x="20" y="205" width="60" height="40" rx="6" class="old"/><text x="50" y="230" class="t">old</text>
<rect x="90" y="205" width="60" height="40" rx="6" class="old"/><text x="120" y="230" class="t">old</text>
<rect x="160" y="205" width="60" height="40" rx="6" class="new"/><text x="190" y="230" class="t">new</text>

<text x="450" y="30" class="head">t=3 — surge again</text>
<rect x="450" y="40" width="60" height="40" rx="6" class="old"/><text x="480" y="65" class="t">old</text>
<rect x="520" y="40" width="60" height="40" rx="6" class="new"/><text x="550" y="65" class="t">new</text>
<rect x="590" y="40" width="60" height="40" rx="6" class="new"/><text x="620" y="65" class="t">new</text>
<rect x="660" y="40" width="60" height="40" rx="6" class="new"/><text x="690" y="65" class="t">new</text>

<text x="450" y="115" class="head">t=4 — drop the last old Pod</text>
<rect x="450" y="125" width="60" height="40" rx="6" class="new"/><text x="480" y="150" class="t">new</text>
<rect x="520" y="125" width="60" height="40" rx="6" class="new"/><text x="550" y="150" class="t">new</text>
<rect x="590" y="125" width="60" height="40" rx="6" class="new"/><text x="620" y="150" class="t">new</text>

<text x="450" y="200" class="head">Done. Old ReplicaSet kept at 0 replicas for rollback.</text>
</svg>` },

        { type: 'heading', text: 'Rollback', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="fn">$</span> kubectl rollout history deploy/web
<span class="fn">$</span> kubectl rollout undo    deploy/web              <span class="com"># go back one</span>
<span class="fn">$</span> kubectl rollout undo    deploy/web --to-revision=3
<span class="fn">$</span> kubectl rollout status  deploy/web              <span class="com"># wait</span>` },

        { type: 'callout', kind: 'tip', html: 'Deployments keep the last <code>revisionHistoryLimit</code> ReplicaSets (default 10) scaled to 0 so you can roll back instantly. Set it lower in big clusters to save etcd.' }
      ]
    },

    /* ============== Chapter 5 ============== */
    {
      id: 'k8s-c5',
      title: 'Services & cluster DNS',
      icon: '🌐',
      sections: [
        { type: 'heading', text: 'Stable endpoints for ephemeral Pods', level: 1 },
        { type: 'para', html: 'Pod IPs are <em>cattle, not pets</em>. A Pod can be deleted and re-created on another node with a different IP at any time. Hard-coding Pod IPs is a non-starter. A <strong>Service</strong> gives you a stable name, a stable virtual IP (the ClusterIP), and load-balances across whichever Pods currently match its selector.' },

        { type: 'image', alt: 'Service types comparison',
          svg: `<svg viewBox="0 0 820 320" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.box{fill:#fff;stroke:#475569;stroke-width:1.5}.cip{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.np{fill:#fef3c7;stroke:#92400e;stroke-width:2}.lb{fill:#fce7f3;stroke:#be185d;stroke-width:2}.en{fill:#e0e7ff;stroke:#3949ab;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.ti{font-family:Inter,sans-serif;font-size:11px;fill:#475569;text-anchor:middle}</style>
</defs>
<rect x="20" y="30" width="180" height="260" rx="10" class="cip"/>
<text x="110" y="55" class="tb">ClusterIP</text>
<text x="110" y="85" class="t">internal only</text>
<text x="110" y="105" class="ti">default type</text>
<text x="110" y="130" class="t">10.96.X.Y</text>
<text x="110" y="170" class="ti">DNS:</text>
<text x="110" y="190" class="ti">api.default.svc</text>
<text x="110" y="210" class="ti">.cluster.local</text>
<text x="110" y="255" class="ti">For Pod-to-Pod</text>
<text x="110" y="270" class="ti">within cluster</text>

<rect x="220" y="30" width="180" height="260" rx="10" class="np"/>
<text x="310" y="55" class="tb">NodePort</text>
<text x="310" y="85" class="t">node-IP : 30000–32767</text>
<text x="310" y="110" class="t">opens port on EVERY node</text>
<text x="310" y="150" class="ti">Includes a ClusterIP</text>
<text x="310" y="170" class="ti">under the hood</text>
<text x="310" y="230" class="ti">Quick external access</text>
<text x="310" y="250" class="ti">for dev / on-prem</text>

<rect x="420" y="30" width="180" height="260" rx="10" class="lb"/>
<text x="510" y="55" class="tb">LoadBalancer</text>
<text x="510" y="85" class="t">cloud-provided LB</text>
<text x="510" y="115" class="t">EXTERNAL-IP</text>
<text x="510" y="155" class="ti">Builds on NodePort</text>
<text x="510" y="175" class="ti">+ ClusterIP</text>
<text x="510" y="225" class="ti">Pricey if many of them</text>
<text x="510" y="245" class="ti">— consider Ingress instead</text>

<rect x="620" y="30" width="180" height="260" rx="10" class="en"/>
<text x="710" y="55" class="tb">ExternalName</text>
<text x="710" y="85" class="t">CNAME-like alias</text>
<text x="710" y="120" class="ti">No proxy, no Pod</text>
<text x="710" y="140" class="ti">selector</text>
<text x="710" y="195" class="ti">Use to point</text>
<text x="710" y="210" class="ti">cluster DNS at an</text>
<text x="710" y="225" class="ti">external host</text>
</svg>` },

        { type: 'heading', text: 'A typical ClusterIP Service', level: 2 },
        { type: 'code', lang: 'yaml', code: `<span class="kw">apiVersion:</span> v1
<span class="kw">kind:</span> Service
<span class="kw">metadata:</span>
  <span class="kw">name:</span> api
<span class="kw">spec:</span>
  <span class="kw">selector:</span>
    <span class="kw">app:</span> api
  <span class="kw">ports:</span>
  - <span class="kw">port:</span> <span class="num">80</span>          <span class="com"># Service port</span>
    <span class="kw">targetPort:</span> <span class="num">8080</span>   <span class="com"># container port</span>` },

        { type: 'heading', text: 'How cluster DNS works', level: 2 },
        { type: 'para', html: 'Every Service gets an automatic DNS name from CoreDNS:' },
        { type: 'code', lang: 'text', code: `<span class="str">&lt;service-name&gt;.&lt;namespace&gt;.svc.cluster.local</span>

<span class="com"># Same namespace? Just use the short name.</span>
api               <span class="com"># resolves within same ns</span>
api.payments      <span class="com"># cross-namespace</span>` },

        { type: 'heading', text: 'How traffic flows', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          'Pod A does <code>GET http://api/</code>.',
          'CoreDNS resolves <code>api</code> to the ClusterIP (a virtual IP).',
          'The packet is sent to the ClusterIP.',
          'kube-proxy on Pod A\'s node sees this IP (it programmed an iptables rule) and DNATs to one of the backing Pod IPs.',
          'The packet arrives at Pod B. Pod A never knew which Pod it was talking to.'
        ] },

        { type: 'callout', kind: 'info', html: 'A <strong>headless Service</strong> (set <code>clusterIP: None</code>) skips the virtual IP and returns the Pod IPs in DNS instead. Used by StatefulSets so you can address each Pod by name.' },

        { type: 'heading', text: 'Endpoints behind the scenes', level: 2 },
        { type: 'para', html: 'For every Service, K8s maintains an <code>EndpointSlice</code> (modern) or <code>Endpoints</code> (legacy) object listing the Pod IPs the Service points at. Inspect it when traffic doesn\'t flow: <code>kubectl get endpointslice -l kubernetes.io/service-name=api</code>.' }
      ]
    },

    /* ============== Chapter 6 ============== */
    {
      id: 'k8s-c6',
      title: 'Ingress',
      icon: '🚪',
      sections: [
        { type: 'heading', text: 'One HTTP door, many backends', level: 1 },
        { type: 'para', html: 'A LoadBalancer Service gives you one external IP <em>per Service</em>. Pay a cloud LB bill per app and you\'ll quickly want a smarter approach: <strong>Ingress</strong>. One entry point, host- and path-based routing, TLS termination, often all from a single rule file.' },

        { type: 'image', alt: 'Ingress topology — one LB to many services',
          svg: `<svg viewBox="0 0 820 320" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.cli{fill:#e0e7ff;stroke:#3949ab;stroke-width:2}.lb{fill:#fce7f3;stroke:#be185d;stroke-width:2}.ic{fill:#fef3c7;stroke:#92400e;stroke-width:2}.s{fill:#dcfce7;stroke:#15803d;stroke-width:2}.p{fill:#dbeafe;stroke:#1d4ed8;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.ti{font-family:Inter,sans-serif;font-size:11px;fill:#475569;text-anchor:middle}.arr{stroke:#475569;stroke-width:1.5;fill:none;marker-end:url(#ar6)}</style>
  <marker id="ar6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker>
</defs>
<rect x="20" y="130" width="120" height="60" rx="8" class="cli"/>
<text x="80" y="160" class="tb">Browser</text>
<text x="80" y="180" class="ti">shop.example.com</text>

<rect x="170" y="130" width="120" height="60" rx="8" class="lb"/>
<text x="230" y="155" class="tb">Cloud LB</text>
<text x="230" y="175" class="ti">EXTERNAL-IP</text>

<rect x="320" y="130" width="160" height="60" rx="8" class="ic"/>
<text x="400" y="155" class="tb">Ingress Controller</text>
<text x="400" y="175" class="ti">nginx / traefik</text>

<rect x="540" y="30" width="160" height="60" rx="8" class="s"/>
<text x="620" y="55" class="tb">Service: web</text>
<text x="620" y="75" class="ti">"/" + host shop.*</text>
<rect x="540" y="130" width="160" height="60" rx="8" class="s"/>
<text x="620" y="155" class="tb">Service: api</text>
<text x="620" y="175" class="ti">"/api/*"</text>
<rect x="540" y="230" width="160" height="60" rx="8" class="s"/>
<text x="620" y="255" class="tb">Service: admin</text>
<text x="620" y="275" class="ti">host admin.*</text>

<rect x="730" y="30" width="60" height="60" rx="6" class="p"/>
<text x="760" y="65" class="t">Pods</text>
<rect x="730" y="130" width="60" height="60" rx="6" class="p"/>
<text x="760" y="165" class="t">Pods</text>
<rect x="730" y="230" width="60" height="60" rx="6" class="p"/>
<text x="760" y="265" class="t">Pods</text>

<line x1="140" y1="160" x2="170" y2="160" class="arr"/>
<line x1="290" y1="160" x2="320" y2="160" class="arr"/>
<line x1="480" y1="155" x2="540" y2="60" class="arr"/>
<line x1="480" y1="160" x2="540" y2="160" class="arr"/>
<line x1="480" y1="170" x2="540" y2="260" class="arr"/>
<line x1="700" y1="60" x2="730" y2="60" class="arr"/>
<line x1="700" y1="160" x2="730" y2="160" class="arr"/>
<line x1="700" y1="260" x2="730" y2="260" class="arr"/>
</svg>` },

        { type: 'heading', text: 'Two pieces: resource + controller', level: 2 },
        { type: 'list', kind: 'check', items: [
          'The <strong>Ingress resource</strong> is just a YAML — routing rules with no behavior.',
          'The <strong>Ingress Controller</strong> is the actual HTTP proxy that watches Ingress resources and reconfigures itself. nginx-ingress, traefik, HAProxy, AWS ALB controller, GKE\'s GCLB controller, ...',
          'Kubernetes does NOT ship a controller by default — you must install one.',
          'If you have no controller, Ingress resources do nothing.'
        ] },

        { type: 'heading', text: 'A real Ingress', level: 2 },
        { type: 'code', lang: 'yaml', code: `<span class="kw">apiVersion:</span> networking.k8s.io/v1
<span class="kw">kind:</span> Ingress
<span class="kw">metadata:</span>
  <span class="kw">name:</span> shop
  <span class="kw">annotations:</span>
    <span class="kw">nginx.ingress.kubernetes.io/rewrite-target:</span> /
<span class="kw">spec:</span>
  <span class="kw">ingressClassName:</span> nginx
  <span class="kw">tls:</span>
  - <span class="kw">hosts:</span> [shop.example.com]
    <span class="kw">secretName:</span> shop-tls
  <span class="kw">rules:</span>
  - <span class="kw">host:</span> shop.example.com
    <span class="kw">http:</span>
      <span class="kw">paths:</span>
      - <span class="kw">path:</span> /api
        <span class="kw">pathType:</span> Prefix
        <span class="kw">backend:</span>
          <span class="kw">service:</span> { name: api, port: { number: <span class="num">80</span> } }
      - <span class="kw">path:</span> /
        <span class="kw">pathType:</span> Prefix
        <span class="kw">backend:</span>
          <span class="kw">service:</span> { name: web, port: { number: <span class="num">80</span> } }` },

        { type: 'callout', kind: 'warn', html: 'TLS in Ingress reads the cert + key from a Kubernetes Secret of type <code>kubernetes.io/tls</code>. The Secret must live in the same namespace as the Ingress.' },

        { type: 'heading', text: 'Beyond Ingress — Gateway API', level: 2 },
        { type: 'para', html: 'The Ingress spec was always a bit minimal — annotations carry most of the controller-specific behavior. The newer <strong>Gateway API</strong> (GA from K8s 1.31) is the more expressive successor: <code>GatewayClass</code>, <code>Gateway</code>, <code>HTTPRoute</code>, <code>TCPRoute</code>, etc. For new clusters, evaluate Gateway API. For everything else, Ingress is still ubiquitous.' }
      ]
    },

    /* ============== Chapter 7 ============== */
    {
      id: 'k8s-c7',
      title: 'ConfigMaps & Secrets',
      icon: '🔐',
      sections: [
        { type: 'heading', text: 'Externalize configuration', level: 1 },
        { type: 'para', html: 'The container image holds code. <strong>Config</strong> lives outside the image. Otherwise you\'d rebuild the image for every value change — and you\'d need a separate image per environment. K8s\' answer: <code>ConfigMap</code> (non-secret) and <code>Secret</code> (sensitive).' },

        { type: 'heading', text: 'ConfigMap basics', level: 2 },
        { type: 'code', lang: 'yaml', code: `<span class="kw">apiVersion:</span> v1
<span class="kw">kind:</span> ConfigMap
<span class="kw">metadata:</span>
  <span class="kw">name:</span> app-config
<span class="kw">data:</span>
  LOG_LEVEL: info
  CACHE_TTL: <span class="str">"60"</span>
  app.properties: |
    db.host=db.payments.svc
    db.port=5432
    feature.flag.new_checkout=true` },

        { type: 'heading', text: 'Three ways to consume it', level: 2 },
        { type: 'code', lang: 'yaml', code: `<span class="com"># 1) As env vars (one key at a time)</span>
<span class="kw">env:</span>
- <span class="kw">name:</span> LOG_LEVEL
  <span class="kw">valueFrom:</span>
    <span class="kw">configMapKeyRef:</span>
      <span class="kw">name:</span> app-config
      <span class="kw">key:</span> LOG_LEVEL

<span class="com"># 2) Whole ConfigMap as env vars</span>
<span class="kw">envFrom:</span>
- <span class="kw">configMapRef:</span>
    <span class="kw">name:</span> app-config

<span class="com"># 3) As files via a volume (each key = one file)</span>
<span class="kw">volumes:</span>
- <span class="kw">name:</span> cfg
  <span class="kw">configMap:</span>
    <span class="kw">name:</span> app-config
<span class="kw">volumeMounts:</span>
- <span class="kw">name:</span> cfg
  <span class="kw">mountPath:</span> /etc/app` },

        { type: 'callout', kind: 'info', html: 'Env-var injection only happens at Pod start — change the ConfigMap and existing Pods still see old values until restart. Volume mounts <em>are</em> updated live (with a delay), useful for apps that re-read config files.' },

        { type: 'heading', text: 'Secrets — like ConfigMaps, but for credentials', level: 2 },
        { type: 'code', lang: 'yaml', code: `<span class="kw">apiVersion:</span> v1
<span class="kw">kind:</span> Secret
<span class="kw">metadata:</span> { name: db }
<span class="kw">type:</span> Opaque
<span class="kw">stringData:</span>
  username: dbuser
  password: s3cr3t-p4ss

<span class="com"># or create via CLI:</span>
<span class="com">#   kubectl create secret generic db --from-literal=password=s3cr3t</span>` },

        { type: 'callout', kind: 'danger', html: '<strong>Secrets are NOT encrypted by default.</strong> They\'re base64-encoded in etcd. To actually encrypt at rest, enable <em>encryption providers</em> (KMS, aescbc, ...) in the API server. And lock down RBAC — anyone with <code>get secrets</code> sees the plaintext.' },

        { type: 'heading', text: 'Common Secret types', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>Opaque</code> — arbitrary key/value (the default).',
          '<code>kubernetes.io/tls</code> — TLS cert + key (used by Ingress).',
          '<code>kubernetes.io/dockerconfigjson</code> — private registry credentials.',
          '<code>kubernetes.io/service-account-token</code> — token for a ServiceAccount (auto-created in older clusters).'
        ] },

        { type: 'callout', kind: 'tip', html: 'For production secrets prefer external managers: AWS Secrets Manager, GCP Secret Manager, HashiCorp Vault, plus the External Secrets Operator that syncs into K8s. Reduces the etcd-as-a-secret-store blast radius.' }
      ]
    },

    /* ============== Chapter 8 ============== */
    {
      id: 'k8s-c8',
      title: 'Volumes & Persistent Storage',
      icon: '💾',
      sections: [
        { type: 'heading', text: 'Pods are ephemeral. Data shouldn\'t be.', level: 1 },
        { type: 'para', html: 'A container\'s writable layer is destroyed when the container is. If your app crashes and restarts, the on-disk data is gone. K8s offers many volume types — from disposable scratch space to durable cloud disks.' },

        { type: 'heading', text: 'Volume types — short list', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>emptyDir</strong> — scratch space, lives with the Pod, dies with it.',
          '<strong>hostPath</strong> — directory on the node\'s filesystem. Risky for portability and security.',
          '<strong>configMap / secret</strong> — projects keys as files.',
          '<strong>downwardAPI</strong> — projects Pod metadata as files (Pod name, labels, etc.).',
          '<strong>PersistentVolumeClaim</strong> — your normal choice for anything that should survive a Pod restart.',
          '<strong>CSI volumes</strong> — Container Storage Interface; cloud disks, NFS, Ceph, etc.'
        ] },

        { type: 'heading', text: 'The PV / PVC / StorageClass trio', level: 2 },

        { type: 'image', alt: 'PVC binding flow',
          svg: `<svg viewBox="0 0 820 280" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.pod{fill:#dcfce7;stroke:#15803d;stroke-width:2}.pvc{fill:#fef3c7;stroke:#92400e;stroke-width:2}.pv{fill:#dbeafe;stroke:#1d4ed8;stroke-width:2}.sc{fill:#fce7f3;stroke:#be185d;stroke-width:2}.disk{fill:#e5e7eb;stroke:#374151;stroke-width:1.5}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.ti{font-family:Inter,sans-serif;font-size:11px;fill:#475569;text-anchor:middle}.arr{stroke:#475569;stroke-width:1.5;fill:none;marker-end:url(#ar8)}</style>
  <marker id="ar8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker>
</defs>
<rect x="20" y="30" width="160" height="80" rx="10" class="pod"/>
<text x="100" y="55" class="tb">Pod</text>
<text x="100" y="80" class="t">volumeMounts</text>
<text x="100" y="95" class="ti">/data ← claimName: db</text>
<rect x="220" y="30" width="160" height="80" rx="10" class="pvc"/>
<text x="300" y="55" class="tb">PVC "db"</text>
<text x="300" y="78" class="t">10 GiB · RWO</text>
<text x="300" y="95" class="ti">storageClassName: gp3</text>
<rect x="420" y="30" width="160" height="80" rx="10" class="pv"/>
<text x="500" y="55" class="tb">PV (auto-created)</text>
<text x="500" y="78" class="t">10 GiB · RWO</text>
<text x="500" y="95" class="ti">claimRef: db</text>
<rect x="620" y="30" width="160" height="80" rx="10" class="disk"/>
<text x="700" y="55" class="tb">Cloud disk</text>
<text x="700" y="78" class="t">EBS gp3</text>
<text x="700" y="95" class="ti">vol-0abc...</text>

<rect x="220" y="170" width="360" height="60" rx="10" class="sc"/>
<text x="400" y="195" class="tb">StorageClass "gp3"</text>
<text x="400" y="215" class="ti">provisioner: ebs.csi.aws.com · reclaimPolicy: Delete</text>

<line x1="180" y1="70" x2="220" y2="70" class="arr"/>
<line x1="380" y1="70" x2="420" y2="70" class="arr"/>
<line x1="580" y1="70" x2="620" y2="70" class="arr"/>
<line x1="300" y1="170" x2="300" y2="115" class="arr"/>
<line x1="500" y1="170" x2="500" y2="115" class="arr"/>
</svg>` },

        { type: 'list', kind: 'numbered', items: [
          'You create a <strong>PVC</strong>: "I want 10 GiB, ReadWriteOnce, of StorageClass <code>gp3</code>."',
          'The CSI provisioner registered with that StorageClass sees the PVC is unbound and provisions a real disk in the cloud.',
          'It creates a <strong>PV</strong> object representing that disk, and binds it to the PVC.',
          'Your Pod\'s volume references the PVC by name. The kubelet mounts the disk into the container at <code>volumeMounts.mountPath</code>.',
          'When the Pod dies, the data stays. Recreate the Pod → it mounts the same disk.'
        ] },

        { type: 'heading', text: 'Access modes', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>ReadWriteOnce (RWO)</strong> — mounted by one node at a time. Cloud block volumes (EBS, GCE PD).',
          '<strong>ReadOnlyMany (ROX)</strong> — many nodes, read-only.',
          '<strong>ReadWriteMany (RWX)</strong> — many nodes, read-write. Needs a shared filesystem (NFS, EFS, CephFS).',
          '<strong>ReadWriteOncePod (RWOP)</strong> — exactly one Pod can mount it.'
        ] },

        { type: 'heading', text: 'Reclaim policy', level: 2 },
        { type: 'para', html: 'When the PVC is deleted, what happens to the PV?' },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Delete</strong> — the PV and underlying disk are deleted (default for dynamic provisioning).',
          '<strong>Retain</strong> — PV and disk kept; admin reclaims manually. Safer for valuable data.'
        ] },

        { type: 'callout', kind: 'warn', html: 'On managed K8s, the default StorageClass usually has <code>reclaimPolicy: Delete</code>. <em>Delete the PVC for your prod database and the disk goes with it.</em> Set <code>persistentVolumeReclaimPolicy: Retain</code> for anything important.' }
      ]
    },

    /* ============== Chapter 9 ============== */
    {
      id: 'k8s-c9',
      title: 'Namespaces & RBAC',
      icon: '🪪',
      sections: [
        { type: 'heading', text: 'Slicing the cluster', level: 1 },
        { type: 'para', html: 'A <strong>Namespace</strong> is a logical partition inside a single cluster. It scopes names (you can have a Deployment <code>web</code> in both <code>dev</code> and <code>prod</code>), quotas, network policies, and most RBAC. It does <em>not</em> give you a separate kernel, separate nodes, or hard isolation — that\'s what separate clusters are for.' },

        { type: 'heading', text: 'Default namespaces', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>default</code> — where everything lands if you don\'t pick one. Avoid in production.',
          '<code>kube-system</code> — K8s internals. Don\'t touch unless you know what you\'re doing.',
          '<code>kube-public</code> — readable by anyone, even unauthenticated. Used for cluster info.',
          '<code>kube-node-lease</code> — node heartbeats.'
        ] },

        { type: 'heading', text: 'RBAC in 60 seconds', level: 2 },
        { type: 'para', html: 'Four object types make up Role-Based Access Control:' },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Role</strong> — a list of allowed verbs (<code>get</code>, <code>list</code>, <code>create</code>, ...) on resources, scoped to one namespace.',
          '<strong>ClusterRole</strong> — same, but cluster-wide (or for cluster-scoped resources like Nodes).',
          '<strong>RoleBinding</strong> — binds a Role (or a ClusterRole, scoped down) to a user/group/ServiceAccount in one namespace.',
          '<strong>ClusterRoleBinding</strong> — binds a ClusterRole cluster-wide.'
        ] },

        { type: 'heading', text: 'Example: read-only access to one namespace', level: 2 },
        { type: 'code', lang: 'yaml', code: `<span class="kw">apiVersion:</span> rbac.authorization.k8s.io/v1
<span class="kw">kind:</span> Role
<span class="kw">metadata:</span>
  <span class="kw">namespace:</span> payments
  <span class="kw">name:</span> reader
<span class="kw">rules:</span>
- <span class="kw">apiGroups:</span> [<span class="str">""</span>, apps]
  <span class="kw">resources:</span> [pods, deployments, services]
  <span class="kw">verbs:</span> [get, list, watch]
---
<span class="kw">apiVersion:</span> rbac.authorization.k8s.io/v1
<span class="kw">kind:</span> RoleBinding
<span class="kw">metadata:</span>
  <span class="kw">namespace:</span> payments
  <span class="kw">name:</span> alice-reader
<span class="kw">subjects:</span>
- <span class="kw">kind:</span> User
  <span class="kw">name:</span> alice@example.com
<span class="kw">roleRef:</span>
  <span class="kw">kind:</span> Role
  <span class="kw">name:</span> reader
  <span class="kw">apiGroup:</span> rbac.authorization.k8s.io` },

        { type: 'heading', text: 'ServiceAccounts — identities for Pods', level: 2 },
        { type: 'para', html: 'A <strong>ServiceAccount</strong> is the identity a Pod uses to call the API server. Every Pod has one (a namespace\'s <code>default</code> SA if you don\'t set one). The kubelet projects a short-lived token into the Pod at <code>/var/run/secrets/kubernetes.io/serviceaccount/token</code>.' },
        { type: 'code', lang: 'yaml', code: `<span class="kw">apiVersion:</span> v1
<span class="kw">kind:</span> ServiceAccount
<span class="kw">metadata:</span>
  <span class="kw">name:</span> deployer
  <span class="kw">namespace:</span> ci
---
<span class="kw">apiVersion:</span> apps/v1
<span class="kw">kind:</span> Deployment
<span class="kw">spec:</span>
  <span class="kw">template:</span>
    <span class="kw">spec:</span>
      <span class="kw">serviceAccountName:</span> deployer
      <span class="kw">containers:</span>
      - <span class="kw">name:</span> bot
        <span class="kw">image:</span> kubectl:latest` },

        { type: 'callout', kind: 'tip', html: 'Apply <em>least privilege</em>: never bind <code>cluster-admin</code> to a workload. If a Pod gets compromised, that token is the attacker\'s key to the whole cluster.' },

        { type: 'heading', text: 'ResourceQuotas and LimitRanges', level: 2 },
        { type: 'para', html: 'Two ways to keep one tenant from eating the cluster:' },
        { type: 'list', kind: 'bullet', items: [
          '<strong>ResourceQuota</strong> — caps total CPU/memory/PVCs/object counts within a namespace.',
          '<strong>LimitRange</strong> — sets per-Pod defaults and min/max, ensures Pods declare resources.'
        ] }
      ]
    },

    /* ============== Chapter 10 ============== */
    {
      id: 'k8s-c10',
      title: 'StatefulSets & DaemonSets',
      icon: '🗄️',
      sections: [
        { type: 'heading', text: 'When Deployment isn\'t enough', level: 1 },
        { type: 'para', html: 'A Deployment treats Pods as identical and replaceable. Some workloads can\'t accept that.' },

        { type: 'heading', text: 'StatefulSet — stable identity + storage', level: 2 },
        { type: 'para', html: 'Use a StatefulSet for databases, queues, and anything where Pods are NOT interchangeable.' },
        { type: 'list', kind: 'check', items: [
          'Pods are named with ordinals: <code>db-0</code>, <code>db-1</code>, <code>db-2</code>. Stable across restarts.',
          'Each Pod gets its OWN PVC (via <code>volumeClaimTemplates</code>). When <code>db-1</code> restarts, it remounts <code>db-1</code>\'s PVC.',
          'Pods start in order: <code>db-0</code> must be Ready before <code>db-1</code> starts (configurable).',
          'They scale down in reverse order.',
          'Pair with a headless Service to address each Pod by DNS: <code>db-0.dbs.default.svc.cluster.local</code>.'
        ] },
        { type: 'code', lang: 'yaml', code: `<span class="kw">apiVersion:</span> apps/v1
<span class="kw">kind:</span> StatefulSet
<span class="kw">metadata:</span> { name: db }
<span class="kw">spec:</span>
  <span class="kw">serviceName:</span> dbs            <span class="com"># a headless Service</span>
  <span class="kw">replicas:</span> <span class="num">3</span>
  <span class="kw">selector:</span> { matchLabels: { app: db } }
  <span class="kw">template:</span>
    <span class="kw">metadata:</span> { labels: { app: db } }
    <span class="kw">spec:</span>
      <span class="kw">containers:</span>
      - <span class="kw">name:</span> pg
        <span class="kw">image:</span> postgres:<span class="num">16</span>
        <span class="kw">volumeMounts:</span>
        - <span class="kw">name:</span> data
          <span class="kw">mountPath:</span> /var/lib/postgresql/data
  <span class="kw">volumeClaimTemplates:</span>
  - <span class="kw">metadata:</span> { name: data }
    <span class="kw">spec:</span>
      <span class="kw">accessModes:</span> [ReadWriteOnce]
      <span class="kw">resources:</span>
        <span class="kw">requests:</span> { storage: <span class="str">"10Gi"</span> }` },

        { type: 'callout', kind: 'warn', html: 'A StatefulSet alone does NOT make Postgres highly available. It just gives you stable names and storage. You still need replication, failover, and backup — usually via an operator (CloudNativePG, Stackgres, Percona PGO).' },

        { type: 'heading', text: 'DaemonSet — one Pod per node', level: 2 },
        { type: 'para', html: 'A DaemonSet runs exactly one (matching) Pod on every node. New node joins the cluster? K8s automatically schedules the Pod there. Node removed? Pod goes with it.' },
        { type: 'list', kind: 'bullet', items: [
          'Log collectors (Fluent Bit, Filebeat, Vector)',
          'Metric agents (node_exporter, OpenTelemetry collector)',
          'Storage drivers (CSI plugins) and network plugins (CNI)',
          'Security agents (Falco, anti-malware)'
        ] },
        { type: 'code', lang: 'yaml', code: `<span class="kw">apiVersion:</span> apps/v1
<span class="kw">kind:</span> DaemonSet
<span class="kw">metadata:</span> { name: log-shipper }
<span class="kw">spec:</span>
  <span class="kw">selector:</span> { matchLabels: { app: log-shipper } }
  <span class="kw">template:</span>
    <span class="kw">metadata:</span> { labels: { app: log-shipper } }
    <span class="kw">spec:</span>
      <span class="kw">tolerations:</span>            <span class="com"># run on control-plane too</span>
      - <span class="kw">key:</span> node-role.kubernetes.io/control-plane
        <span class="kw">operator:</span> Exists
        <span class="kw">effect:</span> NoSchedule
      <span class="kw">containers:</span>
      - <span class="kw">name:</span> fluent-bit
        <span class="kw">image:</span> fluent/fluent-bit:<span class="num">3</span>` },

        { type: 'callout', kind: 'tip', html: 'Restrict a DaemonSet to a subset of nodes with <code>spec.template.spec.nodeSelector</code> or affinity rules. Common when you have GPU-only or storage-only nodes.' }
      ]
    },

    /* ============== Chapter 11 ============== */
    {
      id: 'k8s-c11',
      title: 'Jobs & CronJobs',
      icon: '⏱️',
      sections: [
        { type: 'heading', text: 'Run-to-completion work', level: 1 },
        { type: 'para', html: 'Deployments keep Pods running forever. Some work has a beginning and an end — db migrations, nightly reports, ML training runs, cleanups. For those, use a <strong>Job</strong>. For scheduled recurring runs, a <strong>CronJob</strong>.' },

        { type: 'heading', text: 'A simple Job', level: 2 },
        { type: 'code', lang: 'yaml', code: `<span class="kw">apiVersion:</span> batch/v1
<span class="kw">kind:</span> Job
<span class="kw">metadata:</span> { name: migrate }
<span class="kw">spec:</span>
  <span class="kw">backoffLimit:</span> <span class="num">4</span>             <span class="com"># retry up to 4 times</span>
  <span class="kw">template:</span>
    <span class="kw">spec:</span>
      <span class="kw">restartPolicy:</span> OnFailure
      <span class="kw">containers:</span>
      - <span class="kw">name:</span> mig
        <span class="kw">image:</span> myapp:v2
        <span class="kw">command:</span> [<span class="str">"./migrate"</span>]` },

        { type: 'heading', text: 'Parallel Jobs', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<code>completions: 5</code> — succeed 5 times to be done.',
          '<code>parallelism: 2</code> — run at most 2 Pods at once.',
          '<code>completionMode: Indexed</code> — each Pod gets a unique index (great for sharding work).'
        ] },

        { type: 'heading', text: 'CronJobs', level: 2 },
        { type: 'code', lang: 'yaml', code: `<span class="kw">apiVersion:</span> batch/v1
<span class="kw">kind:</span> CronJob
<span class="kw">metadata:</span> { name: nightly-report }
<span class="kw">spec:</span>
  <span class="kw">schedule:</span> <span class="str">"0 2 * * *"</span>      <span class="com"># 2:00 AM every day</span>
  <span class="kw">concurrencyPolicy:</span> Forbid      <span class="com"># Allow | Forbid | Replace</span>
  <span class="kw">startingDeadlineSeconds:</span> <span class="num">300</span>
  <span class="kw">successfulJobsHistoryLimit:</span> <span class="num">3</span>
  <span class="kw">failedJobsHistoryLimit:</span> <span class="num">1</span>
  <span class="kw">jobTemplate:</span>
    <span class="kw">spec:</span>
      <span class="kw">template:</span>
        <span class="kw">spec:</span>
          <span class="kw">restartPolicy:</span> OnFailure
          <span class="kw">containers:</span>
          - <span class="kw">name:</span> report
            <span class="kw">image:</span> myapp:v2
            <span class="kw">command:</span> [<span class="str">"./gen-report"</span>]` },

        { type: 'callout', kind: 'info', html: 'Cron expression: <code>min hour day-of-month month day-of-week</code>. <code>0 */6 * * *</code> = every 6 hours on the hour. Use <code>crontab.guru</code> to sanity-check.' },

        { type: 'heading', text: 'Concurrency policies', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Allow</strong> — multiple Jobs can run at once (default).',
          '<strong>Forbid</strong> — if the previous Job is still running, skip this one.',
          '<strong>Replace</strong> — cancel the previous and start a fresh one.'
        ] },

        { type: 'callout', kind: 'tip', html: 'For long-running batch pipelines with dependencies between Jobs, look at <strong>Argo Workflows</strong> or <strong>Tekton</strong>. K8s Jobs alone aren\'t a DAG runner.' }
      ]
    },

    /* ============== Chapter 12 ============== */
    {
      id: 'k8s-c12',
      title: 'Probes & autoscaling',
      icon: '🫀',
      sections: [
        { type: 'heading', text: 'Health checks: liveness, readiness, startup', level: 1 },
        { type: 'para', html: 'Three probes, three meanings. They sound similar; their consequences are very different.' },

        { type: 'image', alt: 'Probe failure → restart flow',
          svg: `<svg viewBox="0 0 820 240" xmlns="http://www.w3.org/2000/svg">
<defs>
  <style>.ok{fill:#dcfce7;stroke:#15803d;stroke-width:2}.bad{fill:#fee2e2;stroke:#991b1b;stroke-width:2}.act{fill:#fef3c7;stroke:#92400e;stroke-width:2}.t{font-family:Inter,sans-serif;font-size:12px;fill:#0f172a;text-anchor:middle}.tb{font-family:Inter,sans-serif;font-size:14px;font-weight:700;fill:#0f172a;text-anchor:middle}.arr{stroke:#475569;stroke-width:1.5;fill:none;marker-end:url(#ar12)}</style>
  <marker id="ar12" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker>
</defs>
<text x="50" y="30" class="tb">Liveness</text>
<rect x="20" y="50" width="120" height="50" rx="8" class="ok"/>
<text x="80" y="80" class="t">GET /healthz</text>
<rect x="170" y="50" width="120" height="50" rx="8" class="bad"/>
<text x="230" y="75" class="t">fails 3x in a row</text>
<rect x="320" y="50" width="180" height="50" rx="8" class="act"/>
<text x="410" y="80" class="t">kubelet kills container</text>
<rect x="530" y="50" width="180" height="50" rx="8" class="ok"/>
<text x="620" y="75" class="t">runtime restarts it</text>
<text x="620" y="92" class="t">(RESTARTS++)</text>
<line x1="140" y1="75" x2="170" y2="75" class="arr"/>
<line x1="290" y1="75" x2="320" y2="75" class="arr"/>
<line x1="500" y1="75" x2="530" y2="75" class="arr"/>

<text x="50" y="135" class="tb">Readiness</text>
<rect x="20" y="155" width="120" height="50" rx="8" class="ok"/>
<text x="80" y="185" class="t">GET /ready</text>
<rect x="170" y="155" width="120" height="50" rx="8" class="bad"/>
<text x="230" y="180" class="t">fails</text>
<rect x="320" y="155" width="200" height="50" rx="8" class="act"/>
<text x="420" y="180" class="t">Pod removed from</text>
<text x="420" y="197" class="t">Service endpoints</text>
<rect x="550" y="155" width="200" height="50" rx="8" class="ok"/>
<text x="650" y="180" class="t">Container keeps running</text>
<text x="650" y="197" class="t">no restart</text>
<line x1="140" y1="180" x2="170" y2="180" class="arr"/>
<line x1="290" y1="180" x2="320" y2="180" class="arr"/>
<line x1="520" y1="180" x2="550" y2="180" class="arr"/>
</svg>` },

        { type: 'list', kind: 'check', items: [
          '<strong>livenessProbe</strong> failing → kubelet kills the container, runtime restarts it. Use sparingly — too aggressive = crash loops.',
          '<strong>readinessProbe</strong> failing → Pod is pulled from Service endpoints. No restart. Good for warmup or temporary backpressure.',
          '<strong>startupProbe</strong> succeeds once at boot, then disables the other two until done. Use for slow-starting apps to avoid liveness false positives.'
        ] },

        { type: 'heading', text: 'Probe handlers', level: 2 },
        { type: 'code', lang: 'yaml', code: `<span class="com"># HTTP</span>
<span class="kw">readinessProbe:</span>
  <span class="kw">httpGet:</span> { path: /healthz, port: <span class="num">8080</span> }
  <span class="kw">initialDelaySeconds:</span> <span class="num">2</span>
  <span class="kw">periodSeconds:</span> <span class="num">5</span>
  <span class="kw">failureThreshold:</span> <span class="num">3</span>

<span class="com"># TCP</span>
<span class="kw">readinessProbe:</span>
  <span class="kw">tcpSocket:</span> { port: <span class="num">5432</span> }

<span class="com"># Exec</span>
<span class="kw">livenessProbe:</span>
  <span class="kw">exec:</span> { command: [cat, /tmp/healthy] }

<span class="com"># gRPC (K8s 1.24+)</span>
<span class="kw">livenessProbe:</span>
  <span class="kw">grpc:</span> { port: <span class="num">9090</span> }` },

        { type: 'callout', kind: 'warn', html: 'A misconfigured livenessProbe is a great way to take production down. If <code>/healthz</code> calls the database, a slow DB causes K8s to kill all your healthy app Pods. Keep liveness checks cheap and self-contained.' },

        { type: 'heading', text: 'Horizontal Pod Autoscaler (HPA)', level: 2 },
        { type: 'para', html: 'The HPA watches a metric and adjusts <code>spec.replicas</code> between <code>minReplicas</code> and <code>maxReplicas</code>.' },
        { type: 'code', lang: 'yaml', code: `<span class="kw">apiVersion:</span> autoscaling/v2
<span class="kw">kind:</span> HorizontalPodAutoscaler
<span class="kw">metadata:</span> { name: web }
<span class="kw">spec:</span>
  <span class="kw">scaleTargetRef:</span>
    <span class="kw">apiVersion:</span> apps/v1
    <span class="kw">kind:</span> Deployment
    <span class="kw">name:</span> web
  <span class="kw">minReplicas:</span> <span class="num">2</span>
  <span class="kw">maxReplicas:</span> <span class="num">10</span>
  <span class="kw">metrics:</span>
  - <span class="kw">type:</span> Resource
    <span class="kw">resource:</span>
      <span class="kw">name:</span> cpu
      <span class="kw">target:</span> { type: Utilization, averageUtilization: <span class="num">70</span> }` },

        { type: 'heading', text: 'The autoscaler trio', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>HPA</strong> — add/remove Pods of an existing workload.',
          '<strong>VPA</strong> — resize CPU/memory of Pods (often requires Pod restart).',
          '<strong>Cluster Autoscaler / Karpenter</strong> — add/remove <em>nodes</em> when Pods can\'t be scheduled.'
        ] },

        { type: 'callout', kind: 'tip', html: 'HPA needs the <code>metrics-server</code> add-on. For custom metrics (req/s, queue depth), install the <em>prometheus-adapter</em> and reference custom or external metrics from your HPA.' }
      ]
    },

    /* ============== Chapter 13 ============== */
    {
      id: 'k8s-c13',
      title: 'kubectl essentials',
      icon: '🛠️',
      sections: [
        { type: 'heading', text: 'The Swiss Army knife', level: 1 },
        { type: 'para', html: '<code>kubectl</code> is a thin client over the Kubernetes API. It reads a <code>kubeconfig</code> file (usually <code>~/.kube/config</code>) telling it where the API server is, who to authenticate as, and which namespace is current. Master a dozen commands and 95% of day-to-day ops becomes muscle memory.' },

        { type: 'heading', text: 'Reading state', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="fn">kubectl</span> get pods
<span class="fn">kubectl</span> get pods -o wide                <span class="com"># node + IP</span>
<span class="fn">kubectl</span> get pods -A                      <span class="com"># all namespaces</span>
<span class="fn">kubectl</span> get pods -l app=web,tier=prod    <span class="com"># label selector</span>
<span class="fn">kubectl</span> get pod nginx -o yaml             <span class="com"># full YAML</span>
<span class="fn">kubectl</span> get pod nginx -o jsonpath='{.status.phase}'
<span class="fn">kubectl</span> describe pod nginx                <span class="com"># events + everything</span>` },

        { type: 'heading', text: 'Writing state', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="fn">kubectl</span> apply -f deploy.yaml      <span class="com"># declarative create/update</span>
<span class="fn">kubectl</span> apply -k ./overlays/prod   <span class="com"># Kustomize</span>
<span class="fn">kubectl</span> delete -f deploy.yaml
<span class="fn">kubectl</span> edit deploy web             <span class="com"># live edit (careful)</span>
<span class="fn">kubectl</span> scale  deploy web --replicas=<span class="num">5</span>
<span class="fn">kubectl</span> patch  deploy web --type=merge -p '{"spec":{"replicas":<span class="num">3</span>}}'` },

        { type: 'heading', text: 'Debugging Pods', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="fn">kubectl</span> logs pod/web                 <span class="com"># stdout/stderr</span>
<span class="fn">kubectl</span> logs pod/web -c sidecar      <span class="com"># multi-container</span>
<span class="fn">kubectl</span> logs pod/web --previous       <span class="com"># prior crash</span>
<span class="fn">kubectl</span> logs deploy/web --tail=<span class="num">100</span> -f
<span class="fn">kubectl</span> exec -it pod/web -- sh
<span class="fn">kubectl</span> exec -it pod/web -c sidecar -- bash
<span class="fn">kubectl</span> port-forward pod/web <span class="num">8080</span>:<span class="num">80</span>
<span class="fn">kubectl</span> port-forward svc/api <span class="num">8443</span>:<span class="num">443</span>
<span class="fn">kubectl</span> cp pod/web:/tmp/heap.dump ./heap.dump` },

        { type: 'heading', text: 'Context and namespace juggling', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="fn">kubectl</span> config get-contexts
<span class="fn">kubectl</span> config use-context prod
<span class="fn">kubectl</span> config set-context --current --namespace=payments

<span class="com"># tooling that helps:</span>
<span class="com">#   kubectx — switch context fast</span>
<span class="com">#   kubens  — switch namespace fast</span>
<span class="com">#   k9s     — TUI dashboard</span>` },

        { type: 'callout', kind: 'tip', html: 'Set up shell aliases. The classic: <code>alias k=kubectl</code>. Then <code>k get po</code>, <code>k logs -f</code>, <code>k exec -it ...</code>. Save thousands of keystrokes a week.' },

        { type: 'heading', text: 'kubectl explain — local docs', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="fn">$</span> kubectl explain deployment.spec.strategy
<span class="fn">$</span> kubectl explain pod.spec.containers.resources --recursive` },

        { type: 'callout', kind: 'info', html: 'No internet? <code>kubectl explain</code> prints the schema for any resource, including fields and types. Faster than the website once you know it exists.' }
      ]
    },

    /* ============== Chapter 14 ============== */
    {
      id: 'k8s-c14',
      title: 'Helm — packaging K8s apps',
      icon: '⛵',
      sections: [
        { type: 'heading', text: 'A package manager for Kubernetes', level: 1 },
        { type: 'para', html: 'After your tenth YAML you\'ll wish for templates. Helm gives you parameterized templates (<strong>charts</strong>) rendered with your <strong>values</strong>, installed as <strong>releases</strong>.' },

        { type: 'heading', text: 'Anatomy of a chart', level: 2 },
        { type: 'code', lang: 'text', code: `myapp/
├── Chart.yaml          <span class="com"># name, version, app version</span>
├── values.yaml         <span class="com"># default values</span>
├── templates/
│   ├── _helpers.tpl    <span class="com"># named templates (functions)</span>
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
└── charts/             <span class="com"># sub-chart dependencies</span>` },

        { type: 'heading', text: 'A templated Deployment', level: 2 },
        { type: 'code', lang: 'yaml', code: `<span class="kw">apiVersion:</span> apps/v1
<span class="kw">kind:</span> Deployment
<span class="kw">metadata:</span>
  <span class="kw">name:</span> {{ include <span class="str">"myapp.fullname"</span> . }}
  <span class="kw">labels:</span>
    {{- include <span class="str">"myapp.labels"</span> . | nindent <span class="num">4</span> }}
<span class="kw">spec:</span>
  <span class="kw">replicas:</span> {{ .Values.replicaCount }}
  <span class="kw">template:</span>
    <span class="kw">spec:</span>
      <span class="kw">containers:</span>
      - <span class="kw">name:</span> {{ .Chart.Name }}
        <span class="kw">image:</span> <span class="str">"{{ .Values.image.repository }}:{{ .Values.image.tag }}"</span>
        {{- if .Values.resources }}
        <span class="kw">resources:</span>
          {{- toYaml .Values.resources | nindent <span class="num">10</span> }}
        {{- end }}` },

        { type: 'callout', kind: 'info', html: 'Helm uses Go templates with the <code>{{ ... }}</code> syntax. The leading dash (<code>{{-</code>) trims whitespace. <code>nindent N</code> indents by N spaces. The first hour with these is awkward; weeks 2+ are great.' },

        { type: 'heading', text: 'Lifecycle commands', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="fn">$</span> helm repo add bitnami https://charts.bitnami.com/bitnami
<span class="fn">$</span> helm repo update

<span class="fn">$</span> helm install myapp ./myapp                 <span class="com"># install local chart</span>
<span class="fn">$</span> helm install pg bitnami/postgresql \\
        --set auth.password=s3cr3t                  <span class="com"># override value</span>
<span class="fn">$</span> helm install pg bitnami/postgresql -f my-values.yaml

<span class="fn">$</span> helm list                                   <span class="com"># in current ns</span>
<span class="fn">$</span> helm upgrade myapp ./myapp --set replicaCount=<span class="num">5</span>
<span class="fn">$</span> helm history myapp
<span class="fn">$</span> helm rollback myapp <span class="num">2</span>
<span class="fn">$</span> helm uninstall myapp

<span class="fn">$</span> helm template ./myapp                       <span class="com"># dry-render templates</span>
<span class="fn">$</span> helm lint ./myapp                           <span class="com"># sanity-check chart</span>` },

        { type: 'heading', text: 'Values precedence', level: 2 },
        { type: 'list', kind: 'numbered', items: [
          'Chart\'s default <code>values.yaml</code>',
          '<code>-f my-values.yaml</code> (rightmost wins, can stack multiple)',
          '<code>--set key=value</code> (highest precedence)'
        ] },

        { type: 'callout', kind: 'tip', html: 'Keep a per-environment values file (<code>values-dev.yaml</code>, <code>values-prod.yaml</code>) in your repo. CI installs with <code>helm upgrade --install -f values-prod.yaml</code>. Reproducible deploys without YAML copy-paste.' },

        { type: 'heading', text: 'Alternatives', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Kustomize</strong> — overlay-style transformations, no templates. Built into <code>kubectl apply -k</code>.',
          '<strong>Jsonnet / Tanka</strong> — full programming language for K8s manifests. Powerful, niche.',
          '<strong>cdk8s</strong> — write manifests in TypeScript/Python/Go.',
          '<strong>Operators</strong> — when an app needs reconcile logic beyond templates (databases, message queues).'
        ] }
      ]
    },

    /* ============== Chapter 15 ============== */
    {
      id: 'k8s-c15',
      title: 'Observability & troubleshooting',
      icon: '🔍',
      sections: [
        { type: 'heading', text: 'When something is wrong', level: 1 },
        { type: 'para', html: 'Most cluster failures yield to the same loop: check status, read events, read logs, then exec in for a closer look. Memorize this loop and you\'ll be the calm one in the war room.' },

        { type: 'heading', text: 'The four-step debug loop', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="fn">$</span> kubectl get pods                  <span class="com"># Status column</span>
<span class="fn">$</span> kubectl describe pod &lt;name&gt;        <span class="com"># Events at the bottom</span>
<span class="fn">$</span> kubectl logs &lt;name&gt; --previous     <span class="com"># last crash output</span>
<span class="fn">$</span> kubectl exec -it &lt;name&gt; -- sh      <span class="com"># shell in (if running)</span>` },

        { type: 'heading', text: 'Common Pod statuses and what they mean', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>Running</strong> — Pod is scheduled and at least one container is up.',
          '<strong>Pending</strong> — Pod accepted but not yet scheduled. Resources, taints, or unbound PVCs.',
          '<strong>Succeeded</strong> — All containers exited 0 (Jobs).',
          '<strong>Failed</strong> — All containers terminated, at least one with non-zero.',
          '<strong>Unknown</strong> — kubelet can\'t be reached; node may be down.'
        ] },

        { type: 'heading', text: 'Common failure modes', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>CrashLoopBackOff</strong> — container exits, K8s restarts it, it exits again, K8s waits longer (exponential backoff). Check <code>logs --previous</code>.',
          '<strong>ImagePullBackOff</strong> / <strong>ErrImagePull</strong> — wrong tag, private registry without <code>imagePullSecrets</code>, no internet from node.',
          '<strong>Pending</strong> for a long time — <code>describe</code> shows: "0/3 nodes are available: 3 Insufficient memory" or "unbound PVC".',
          '<strong>OOMKilled</strong> in container status — exceeded <code>resources.limits.memory</code>. Raise the limit or find the leak.',
          '<strong>CreateContainerConfigError</strong> — usually a missing ConfigMap or Secret referenced in env.',
          '<strong>Init:0/1</strong> for ages — init container is hanging or failing. <code>kubectl logs &lt;pod&gt; -c &lt;init-container&gt;</code>.'
        ] },

        { type: 'heading', text: 'Logs at scale', level: 2 },
        { type: 'para', html: '<code>kubectl logs</code> works for one Pod, but production logs need a sink. Standard stack: <strong>Fluent Bit</strong> (DaemonSet) → ship to <strong>Loki</strong>, <strong>Elasticsearch</strong>, or a managed log service. Query in <strong>Grafana</strong> or Kibana.' },

        { type: 'heading', text: 'Metrics at scale', level: 2 },
        { type: 'list', kind: 'check', items: [
          '<strong>metrics-server</strong> — required for <code>kubectl top</code> and HPA. Resource metrics only.',
          '<strong>Prometheus + kube-state-metrics</strong> — the de-facto standard for full cluster + app metrics.',
          '<strong>Grafana</strong> dashboards — many community-maintained ones exist (Kubernetes Mixin).',
          '<strong>Alertmanager</strong> — paging on alerts.',
          '<strong>OpenTelemetry</strong> — vendor-neutral way to emit metrics, logs, and traces from your apps.'
        ] },

        { type: 'heading', text: 'Events — your cluster\'s diary', level: 2 },
        { type: 'code', lang: 'bash', code: `<span class="fn">$</span> kubectl get events --sort-by=.lastTimestamp
<span class="fn">$</span> kubectl get events -n payments --field-selector type=Warning
<span class="fn">$</span> kubectl describe pod web | sed -n '/Events:/,$p'` },

        { type: 'callout', kind: 'warn', html: 'Events are kept only ~1 hour by default. If you\'re investigating an incident from yesterday, the events are already gone — that\'s why you ship them to a long-term store (Loki, ELK, Datadog).' },

        { type: 'heading', text: 'Managed K8s — brief comparison', level: 2 },
        { type: 'list', kind: 'bullet', items: [
          '<strong>EKS</strong> (AWS) — most market share. You pay $0.10/h for the control plane. Many add-ons to install.',
          '<strong>GKE</strong> (GCP) — generally considered the most polished. Autopilot mode handles nodes for you.',
          '<strong>AKS</strong> (Azure) — free control plane; tight Azure integration.',
          '<strong>OKE / OCI</strong>, <strong>DOKS</strong> (DigitalOcean), <strong>Linode</strong>, etc. — cheaper, fewer bells.',
          '<strong>kind / minikube / k3s / kubeadm</strong> — local or self-managed.'
        ] },

        { type: 'callout', kind: 'success', html: 'You\'ve seen the whole stack: control plane, Pods, Deployments, Services, Ingress, config, storage, identity, batch, autoscaling, kubectl, Helm, and observability. From here, depth comes from running real workloads — pick a project, ship it to a kind cluster, then to a managed one. The rest is reps.' }
      ]
    }

  ]
});
