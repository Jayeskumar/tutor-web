PUSH({
  id: 'kubernetes',
  name: 'Kubernetes',
  icon: '⎈',
  color: '#3949ab',
  description: 'Container orchestration at scale — pods, services, deployments, and beyond.',
  units: [

    /* ============== UNIT 1 — What & why ============== */
    {
      id: 'k8s-u1', name: 'Unit 1 · What & why Kubernetes', description: 'Declarative orchestration, the ops-team-in-a-box',
      lessons: [
        {
          id: 'k8s-u1-l1', name: 'Why orchestration', icon: '⎈', xp: 15,
          challenges: [
            { type: 'concept', title: 'Containers are great — until you have hundreds', content: `<p>A single container is easy. <strong>Hundreds of containers across dozens of machines</strong> is not. Who restarts a crashed container? Who load-balances traffic? Who upgrades them without downtime?</p>
<p><strong>Kubernetes (K8s)</strong> is the answer: an open-source platform that runs containers across a cluster of machines and keeps them healthy. You describe the <em>desired state</em> in YAML, and K8s makes reality match.</p>
<div class="code-block"><span class="com"># You write:</span>
<span class="kw">replicas:</span> <span class="num">3</span>
<span class="kw">image:</span> myapp:v2

<span class="com"># Kubernetes does:</span>
<span class="com">- pulls the image on 3 nodes</span>
<span class="com">- starts 3 containers</span>
<span class="com">- restarts any that crash</span>
<span class="com">- routes traffic to healthy ones</span></div>
<p>Think of K8s as an <strong>"ops team in a box"</strong> — it does what a 24/7 ops crew used to do, declaratively.</p>` },
            { type: 'multiple-choice', prompt: 'In one phrase, Kubernetes is best described as:',
              options: [
                { text: 'A container runtime', code: false },
                { text: 'A container orchestrator that maintains a declared desired state', code: false },
                { text: 'A virtual machine manager', code: false },
                { text: 'A package manager for Docker images', code: false }
              ],
              correct: 1, explanation: 'K8s orchestrates containers across many nodes and reconciles them with your declared state.' },
            { type: 'true-false', statement: 'In Kubernetes you write <em>imperative</em> step-by-step commands like "start container, then start another."', correct: false, explanation: 'K8s is <strong>declarative</strong> — you describe the desired state and controllers reconcile reality to match.' },
            { type: 'match-pairs', prompt: 'Pain point → what K8s does about it.', leftLabel: 'Problem', rightLabel: 'K8s feature',
              pairs: [
                { left: 'Container crashed', right: 'Auto-restart' },
                { left: 'Need 5 copies', right: 'ReplicaSet' },
                { left: 'Upgrade without downtime', right: 'Rolling deployment' },
                { left: 'Traffic load balancing', right: 'Service' }
              ] },
            { type: 'multiple-choice', prompt: 'The "declarative" model means:',
              options: [
                { text: 'You list every command in order', code: false },
                { text: 'You declare the desired state and a controller drives reality toward it', code: false },
                { text: 'You SSH into each node', code: false },
                { text: 'You use bash scripts only', code: false }
              ],
              correct: 1, explanation: 'Controllers continuously reconcile observed state against the spec.' },
            { type: 'fill-blank', prompt: 'A K8s controller continuously _____ the cluster toward your declared state.',
              codeLines: [ { html: 'A controller continuously <span class="fn">_BLANK_</span> the cluster toward the declared state.' } ],
              tokens: ['reconciles', 'compiles', 'destroys', 'monitors'], correctAnswer: 'reconciles',
              explanation: 'Reconciliation = comparing observed vs desired and fixing the delta.' }
          ]
        }
      ]
    },

    /* ============== UNIT 2 — Architecture ============== */
    {
      id: 'k8s-u2', name: 'Unit 2 · Architecture', description: 'Control plane and node components',
      lessons: [
        {
          id: 'k8s-u2-l1', name: 'Control plane', icon: '🧠', xp: 20,
          challenges: [
            { type: 'concept', title: 'The control plane — brains of the cluster', content: `<p>A K8s cluster has two kinds of machines: <strong>control-plane nodes</strong> (the brain) and <strong>worker nodes</strong> (where your containers actually run).</p>
<p>The control plane has four big components:</p>
<div class="code-block"><span class="kw">kube-apiserver</span>     — the front door; everything talks REST to it
<span class="kw">etcd</span>               — distributed key-value store; THE source of truth
<span class="kw">kube-scheduler</span>     — picks a node for each new Pod
<span class="kw">controller-manager</span> — runs the reconcile loops (replica, node, job, ...)</div>
<p>Want to know what is "real" in your cluster? It is whatever <code>etcd</code> says.</p>` },
            { type: 'multiple-choice', prompt: 'Which control-plane component is the cluster\'s source of truth?',
              options: [
                { text: 'kube-apiserver', code: true },
                { text: 'etcd', code: true },
                { text: 'kube-scheduler', code: true },
                { text: 'kubelet', code: true }
              ],
              correct: 1, explanation: 'etcd stores all cluster state. The API server reads/writes it.' },
            { type: 'match-pairs', prompt: 'Match control-plane component → job.', leftLabel: 'Component', rightLabel: 'Job',
              pairs: [
                { left: 'kube-apiserver', right: 'REST front door' },
                { left: 'etcd', right: 'Cluster state store' },
                { left: 'kube-scheduler', right: 'Assigns Pods to Nodes' },
                { left: 'controller-manager', right: 'Runs reconcile loops' }
              ] },
            { type: 'true-false', statement: 'Every component (kubelet, scheduler, controllers) talks to <code>etcd</code> directly.', correct: false, explanation: 'Only the <code>kube-apiserver</code> talks to <code>etcd</code>. Everyone else goes through the API server.' },
            { type: 'multiple-choice', prompt: 'You ran <code>kubectl apply -f deploy.yaml</code>. The YAML is first sent to:',
              options: [
                { text: 'etcd directly', code: false },
                { text: 'kube-apiserver', code: true },
                { text: 'the scheduler', code: false },
                { text: 'the kubelet on a worker', code: false }
              ],
              correct: 1, explanation: 'All clients talk to the API server. It persists to etcd and notifies controllers.' },
            { type: 'fill-blank', prompt: 'Pick the component that places new Pods on suitable nodes.',
              codeLines: [ { html: 'The <span class="fn">_BLANK_</span> assigns new Pods to nodes.' } ],
              tokens: ['kube-scheduler', 'kubelet', 'etcd', 'controller-manager'], correctAnswer: 'kube-scheduler',
              explanation: 'Scheduler watches for Pods with no nodeName and picks one based on resources/constraints.' }
          ]
        },
        {
          id: 'k8s-u2-l2', name: 'Node components', icon: '🖥️', xp: 20,
          challenges: [
            { type: 'concept', title: 'What runs on each worker node', content: `<p>Every worker node runs three pieces:</p>
<div class="code-block"><span class="kw">kubelet</span>            — node agent; talks to the API server and
                     starts/stops containers
<span class="kw">kube-proxy</span>         — programs iptables/IPVS so Service IPs work
<span class="kw">container runtime</span>  — actually runs containers (containerd, CRI-O)</div>
<p>When the scheduler picks node X for your Pod, the <strong>kubelet on X</strong> sees a new Pod assigned to it, asks the runtime to pull images and start containers, then reports status back through the API server.</p>` },
            { type: 'match-pairs', prompt: 'Match node component → role.', leftLabel: 'Component', rightLabel: 'Role',
              pairs: [
                { left: 'kubelet', right: 'Starts/stops containers, reports status' },
                { left: 'kube-proxy', right: 'Routes Service traffic' },
                { left: 'containerd', right: 'Container runtime' },
                { left: 'CNI plugin', right: 'Pod networking' }
              ] },
            { type: 'multiple-choice', prompt: 'Which component actually runs your container image?',
              options: [
                { text: 'kube-apiserver', code: true },
                { text: 'kubelet', code: true },
                { text: 'container runtime (containerd / CRI-O)', code: false },
                { text: 'kube-proxy', code: true }
              ],
              correct: 2, explanation: 'kubelet asks the runtime via CRI; the runtime runs the container.' },
            { type: 'true-false', statement: 'kube-proxy is responsible for forwarding traffic that arrives at a Service IP to a backing Pod.', correct: true, explanation: 'It programs iptables/IPVS rules per Service.' },
            { type: 'reorder-code', prompt: 'Order the events when you <code>kubectl apply</code> a new Pod.',
              lines: [
                '<span class="com"># 1)</span> kubectl sends spec to kube-apiserver',
                '<span class="com"># 2)</span> apiserver persists to etcd',
                '<span class="com"># 3)</span> scheduler assigns the Pod to a node',
                '<span class="com"># 4)</span> kubelet on that node pulls the image',
                '<span class="com"># 5)</span> container runtime starts the container'
              ],
              correctOrder: [0, 1, 2, 3, 4],
              explanation: 'API server → etcd → scheduler → kubelet → runtime. Memorize this flow.' },
            { type: 'output-predict', prompt: 'You run <code>kubectl get nodes</code>. Output is most likely:',
              code: `<span class="fn">$</span> kubectl get nodes`,
              options: [
                'A list of pods running in default namespace',
                'A list of worker (and control-plane) nodes with STATUS, ROLES, AGE',
                'A list of container images',
                'An error — wrong verb'
              ],
              correct: 1, explanation: '<code>kubectl get nodes</code> lists machines in the cluster with their roles and ready status.' }
          ]
        }
      ]
    },

    /* ============== UNIT 3 — Pods ============== */
    {
      id: 'k8s-u3', name: 'Unit 3 · Pods', description: 'The smallest deployable unit',
      lessons: [
        {
          id: 'k8s-u3-l1', name: 'Pod basics', icon: '📦', xp: 20,
          challenges: [
            { type: 'concept', title: 'A Pod is one or more containers, glued together', content: `<p>A <strong>Pod</strong> is the smallest unit K8s schedules. It wraps one (usually) or more containers that:</p>
<ul>
<li>share the same <strong>network namespace</strong> (same IP, same ports)</li>
<li>can share <strong>volumes</strong></li>
<li>are always scheduled to the <strong>same node</strong></li>
<li>are <strong>started and stopped together</strong></li>
</ul>
<div class="code-block"><span class="kw">apiVersion:</span> v1
<span class="kw">kind:</span> Pod
<span class="kw">metadata:</span>
  <span class="kw">name:</span> nginx
<span class="kw">spec:</span>
  <span class="kw">containers:</span>
  - <span class="kw">name:</span> web
    <span class="kw">image:</span> nginx:1.27
    <span class="kw">ports:</span>
    - <span class="kw">containerPort:</span> <span class="num">80</span></div>
<p>You almost never create raw Pods. You let a <strong>Deployment</strong> manage them — but understanding the Pod is the foundation.</p>` },
            { type: 'multiple-choice', prompt: 'Two containers in the same Pod share:',
              options: [
                { text: 'The same OS kernel only', code: false },
                { text: 'A network namespace and (optionally) volumes', code: false },
                { text: 'The same image', code: false },
                { text: 'Nothing — they are isolated', code: false }
              ],
              correct: 1, explanation: 'Same network namespace = same IP, communicate via localhost. Volumes are explicitly shared via volumeMounts.' },
            { type: 'true-false', statement: 'Two containers in the same Pod might be scheduled to different nodes.', correct: false, explanation: 'A Pod is the unit of scheduling — all its containers always land on one node.' },
            { type: 'reorder-code', prompt: 'Reorder this Pod YAML into a valid file.',
              lines: [
                '<span class="kw">apiVersion:</span> v1',
                '<span class="kw">kind:</span> Pod',
                '<span class="kw">metadata:</span>',
                '  <span class="kw">name:</span> demo',
                '<span class="kw">spec:</span>',
                '  <span class="kw">containers:</span>',
                '  - <span class="kw">name:</span> app',
                '    <span class="kw">image:</span> nginx'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5, 6, 7],
              explanation: 'Every K8s YAML starts with apiVersion → kind → metadata → spec.' },
            { type: 'output-predict', prompt: 'What does this command print first when the Pod is created?',
              code: `<span class="fn">$</span> kubectl get pods`,
              options: [
                'NAME      READY  STATUS    RESTARTS  AGE',
                'No resources found.',
                'kubectl: command not found',
                'Pod created.'
              ],
              correct: 0, explanation: 'kubectl get prints a header row followed by rows of resources.' },
            { type: 'fill-blank', prompt: 'Two containers in the same Pod talk to each other over _____ .',
              codeLines: [ { html: 'Containers in the same Pod can reach each other on <span class="fn">_BLANK_</span>.' } ],
              tokens: ['localhost', 'the Service IP', 'their cluster IP', 'their pod-to-pod CNI route'], correctAnswer: 'localhost',
              explanation: 'They share the network namespace, so 127.0.0.1 + the other container\'s port works.' }
          ]
        },
        {
          id: 'k8s-u3-l2', name: 'Multi-container patterns', icon: '🧩', xp: 25,
          challenges: [
            { type: 'concept', title: 'Sidecar · Ambassador · Adapter', content: `<p>Three classic patterns for multi-container Pods:</p>
<div class="code-block"><span class="com">Sidecar    </span> — helper container alongside the main app
             e.g., log shipper, file sync, service mesh proxy

<span class="com">Ambassador </span> — proxy that simplifies remote services
             e.g., Redis proxy that handles sharding

<span class="com">Adapter    </span> — normalizes the main app\'s output
             e.g., reformats logs/metrics to a standard shape</div>
<p>All three rely on the same Pod-level superpowers: shared network and shared volumes.</p>` },
            { type: 'match-pairs', prompt: 'Match pattern → purpose.', leftLabel: 'Pattern', rightLabel: 'Purpose',
              pairs: [
                { left: 'Sidecar', right: 'Co-located helper (logs, mesh proxy)' },
                { left: 'Ambassador', right: 'Proxy to remote services' },
                { left: 'Adapter', right: 'Normalize app output for outside consumers' },
                { left: 'Init container', right: 'Runs to completion before app starts' }
              ] },
            { type: 'multiple-choice', prompt: 'A log-shipping container next to your main app is a:',
              options: [
                { text: 'Sidecar', code: false },
                { text: 'Ambassador', code: false },
                { text: 'Adapter', code: false },
                { text: 'StatefulSet', code: false }
              ],
              correct: 0, explanation: 'Sidecars augment the main app\'s functionality alongside it.' },
            { type: 'true-false', statement: 'Init containers run <em>after</em> the main app container starts.', correct: false, explanation: 'Init containers run to completion <em>before</em> the main containers start. Useful for setup tasks (db migrations, fetching config).' },
            { type: 'tap-tokens', prompt: 'Build the YAML snippet that declares a sidecar container.',
              tokens: ['containers', ':', '-', 'name', 'app', 'image', 'myapp', '-', 'name', 'logger', 'image', 'fluentd', '{', '}'],
              correctOrder: ['containers', ':', '-', 'name', 'app', 'image', 'myapp', '-', 'name', 'logger', 'image', 'fluentd'],
              explanation: 'Two containers under spec.containers is the sidecar shape.' },
            { type: 'output-predict', prompt: 'A Pod has 1 init container and 2 main containers. <code>kubectl get pod</code> READY column shows what once everything is running?',
              code: `<span class="fn">$</span> kubectl get pod demo`,
              options: ['1/1', '2/2', '3/3', '0/2'],
              correct: 1, explanation: 'READY counts MAIN containers only (2 of 2). Init containers finish before READY counts begin.' }
          ]
        }
      ]
    },

    /* ============== UNIT 4 — ReplicaSets & Deployments ============== */
    {
      id: 'k8s-u4', name: 'Unit 4 · ReplicaSets & Deployments', description: 'Desired state, rolling updates, rollback',
      lessons: [
        {
          id: 'k8s-u4-l1', name: 'Replicas and rolling updates', icon: '🔁', xp: 25,
          challenges: [
            { type: 'concept', title: 'Deployments manage ReplicaSets manage Pods', content: `<p>You almost never create Pods directly. You create a <strong>Deployment</strong>, which creates a <strong>ReplicaSet</strong>, which creates the actual <strong>Pods</strong>.</p>
<div class="code-block"><span class="kw">Deployment</span>  →  <span class="kw">ReplicaSet</span>  →  <span class="kw">Pod</span> × N</div>
<p>The ReplicaSet\'s job is one thing: keep N copies of an identical Pod running. The Deployment adds the smart parts: <strong>rolling updates</strong> and <strong>rollbacks</strong>.</p>
<div class="code-block"><span class="kw">apiVersion:</span> apps/v1
<span class="kw">kind:</span> Deployment
<span class="kw">spec:</span>
  <span class="kw">replicas:</span> <span class="num">3</span>
  <span class="kw">selector:</span>
    <span class="kw">matchLabels:</span> { app: web }
  <span class="kw">template:</span>
    <span class="kw">metadata:</span>
      <span class="kw">labels:</span> { app: web }
    <span class="kw">spec:</span>
      <span class="kw">containers:</span>
      - <span class="kw">name:</span> web
        <span class="kw">image:</span> nginx:1.27</div>` },
            { type: 'multiple-choice', prompt: 'You update the image from <code>nginx:1.27</code> to <code>nginx:1.28</code> in a Deployment. What happens?',
              options: [
                { text: 'All Pods restart at once', code: false },
                { text: 'K8s creates a new ReplicaSet and gradually shifts Pods over (rolling update)', code: false },
                { text: 'Nothing — image changes need a new Deployment', code: false },
                { text: 'The cluster goes down momentarily', code: false }
              ],
              correct: 1, explanation: 'A new ReplicaSet is created. K8s scales it up while scaling the old one down, respecting maxSurge/maxUnavailable.' },
            { type: 'true-false', statement: 'A ReplicaSet by itself supports rolling updates.', correct: false, explanation: 'ReplicaSets only maintain replica count. Rolling updates are a Deployment feature.' },
            { type: 'match-pairs', prompt: 'Match concept → owner.', leftLabel: 'Concept', rightLabel: 'Owned by',
              pairs: [
                { left: 'Pods', right: 'ReplicaSet' },
                { left: 'ReplicaSets', right: 'Deployment' },
                { left: 'Rolling strategy', right: 'Deployment' },
                { left: 'Replica count', right: 'ReplicaSet' }
              ] },
            { type: 'fill-blank', prompt: 'Roll back to the previous Deployment revision:',
              codeLines: [ { html: '<span class="fn">$</span> kubectl rollout <span class="fn">_BLANK_</span> deployment/web' } ],
              tokens: ['undo', 'revert', 'back', 'rollback'], correctAnswer: 'undo',
              explanation: '<code>kubectl rollout undo</code> moves you to the previous revision.' },
            { type: 'output-predict', prompt: 'What does this print?',
              code: `<span class="fn">$</span> kubectl rollout status deployment/web`,
              options: [
                '"deployment.apps/web" successfully rolled out',
                'A list of pod IPs',
                'A YAML manifest',
                'An error'
              ],
              correct: 0, explanation: '<code>rollout status</code> waits and prints when the rollout finishes successfully.' },
            { type: 'reorder-code', prompt: 'Order what happens during a rolling update with maxSurge=1, maxUnavailable=0, replicas=3.',
              lines: [
                '<span class="com"># start with 3 old Pods running</span>',
                '<span class="com"># create 1 new Pod (total = 4)</span>',
                '<span class="com"># once it is Ready, delete 1 old Pod (total = 3)</span>',
                '<span class="com"># repeat until all Pods are new</span>'
              ],
              correctOrder: [0, 1, 2, 3],
              explanation: 'maxSurge=1 lets you go one over. maxUnavailable=0 means no Pod is removed before its replacement is Ready.' }
          ]
        }
      ]
    },

    /* ============== UNIT 5 — Services ============== */
    {
      id: 'k8s-u5', name: 'Unit 5 · Services & cluster DNS', description: 'Stable network endpoints for ephemeral Pods',
      lessons: [
        {
          id: 'k8s-u5-l1', name: 'Service types', icon: '🌐', xp: 25,
          challenges: [
            { type: 'concept', title: 'Pods come and go — Services are stable', content: `<p>Pod IPs change every time a Pod restarts. You can\'t hardcode them. A <strong>Service</strong> gives you a stable name + IP that load-balances across whichever Pods match its label selector.</p>
<div class="code-block"><span class="kw">ClusterIP</span>     — default. Only reachable inside the cluster.
<span class="kw">NodePort</span>      — exposes the Service on a port (30000-32767) on every node.
<span class="kw">LoadBalancer</span>  — asks the cloud provider for an external LB.
<span class="kw">ExternalName</span>  — pure DNS alias for an external host.</div>
<p>Inside the cluster, every Service gets a DNS name:</p>
<div class="code-block"><span class="str">&lt;service&gt;.&lt;namespace&gt;.svc.cluster.local</span></div>` },
            { type: 'match-pairs', prompt: 'Match Service type → use case.', leftLabel: 'Type', rightLabel: 'Use case',
              pairs: [
                { left: 'ClusterIP', right: 'Internal service-to-service' },
                { left: 'NodePort', right: 'Expose on every node\'s port' },
                { left: 'LoadBalancer', right: 'Cloud-provided external LB' },
                { left: 'ExternalName', right: 'DNS alias to an external host' }
              ] },
            { type: 'multiple-choice', prompt: 'What\'s the default Service type?',
              options: [
                { text: 'NodePort', code: true },
                { text: 'ClusterIP', code: true },
                { text: 'LoadBalancer', code: true },
                { text: 'ExternalName', code: true }
              ],
              correct: 1, explanation: 'ClusterIP is the default. Internal-only.' },
            { type: 'true-false', statement: 'A Pod can reach <code>http://api.default.svc.cluster.local</code> if a Service named <code>api</code> exists in the <code>default</code> namespace.', correct: true, explanation: 'That\'s the standard cluster-DNS pattern.' },
            { type: 'output-predict', prompt: 'You created a Service of type LoadBalancer on a managed cloud. <code>kubectl get svc</code> shows what for EXTERNAL-IP at first?',
              code: `<span class="fn">$</span> kubectl get svc web`,
              options: ['&lt;none&gt;', '&lt;pending&gt;', '0.0.0.0', '127.0.0.1'],
              correct: 1, explanation: 'EXTERNAL-IP is &lt;pending&gt; while the cloud provider provisions the load balancer.' },
            { type: 'fill-blank', prompt: 'Pick the field that decides which Pods a Service targets.',
              codeLines: [ { html: 'A Service uses a label <span class="fn">_BLANK_</span> to find its backing Pods.' } ],
              tokens: ['selector', 'matcher', 'filter', 'pattern'], correctAnswer: 'selector',
              explanation: '<code>spec.selector</code> on a Service must match the labels on the target Pods.' },
            { type: 'reorder-code', prompt: 'Reorder this Service manifest.',
              lines: [
                '<span class="kw">apiVersion:</span> v1',
                '<span class="kw">kind:</span> Service',
                '<span class="kw">metadata:</span>',
                '  <span class="kw">name:</span> web',
                '<span class="kw">spec:</span>',
                '  <span class="kw">selector:</span>',
                '    app: web',
                '  <span class="kw">ports:</span>',
                '  - <span class="kw">port:</span> <span class="num">80</span>'
              ],
              correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
              explanation: 'apiVersion → kind → metadata → spec → selector → ports.' }
          ]
        }
      ]
    },

    /* ============== UNIT 6 — Ingress ============== */
    {
      id: 'k8s-u6', name: 'Unit 6 · Ingress', description: 'HTTP routing in and out',
      lessons: [
        {
          id: 'k8s-u6-l1', name: 'Ingress and controllers', icon: '🚪', xp: 25,
          challenges: [
            { type: 'concept', title: 'One door — many backends', content: `<p>LoadBalancer Services give you one external IP <em>per Service</em>. Pricey if you have ten APIs. <strong>Ingress</strong> gives you one HTTP entry point that routes by host or path to many Services.</p>
<div class="code-block"><span class="kw">apiVersion:</span> networking.k8s.io/v1
<span class="kw">kind:</span> Ingress
<span class="kw">spec:</span>
  <span class="kw">rules:</span>
  - <span class="kw">host:</span> api.example.com
    <span class="kw">http:</span>
      <span class="kw">paths:</span>
      - <span class="kw">path:</span> /
        <span class="kw">pathType:</span> Prefix
        <span class="kw">backend:</span>
          <span class="kw">service:</span>
            <span class="kw">name:</span> api
            <span class="kw">port:</span> { number: <span class="num">80</span> }</div>
<p>The Ingress resource is just a routing rule. The actual HTTP proxy that enforces it is the <strong>Ingress Controller</strong>: nginx, traefik, HAProxy, ALB, etc. <em>You must install one</em> — K8s doesn\'t bundle it.</p>` },
            { type: 'true-false', statement: 'Installing K8s automatically gives you a working Ingress.', correct: false, explanation: 'The Ingress resource is built in, but you need to install an Ingress Controller (nginx, traefik, ...) for it to do anything.' },
            { type: 'match-pairs', prompt: 'Match Ingress concept → role.', leftLabel: 'Concept', rightLabel: 'Role',
              pairs: [
                { left: 'Ingress resource', right: 'Declarative routing rules' },
                { left: 'Ingress controller', right: 'The actual HTTP proxy' },
                { left: 'host', right: 'Match by HTTP Host header' },
                { left: 'path', right: 'Match by URL path' }
              ] },
            { type: 'multiple-choice', prompt: 'You want <code>shop.example.com/api/*</code> → service <code>api</code> and <code>shop.example.com/*</code> → service <code>web</code>. Best fit?',
              options: [
                { text: 'Two LoadBalancer Services', code: false },
                { text: 'One Ingress with two path rules', code: false },
                { text: 'Two NodePort Services', code: false },
                { text: 'ExternalName Services', code: false }
              ],
              correct: 1, explanation: 'Ingress is built for host/path multiplexing.' },
            { type: 'fill-blank', prompt: 'TLS termination in Ingress uses a Kubernetes _____ .',
              codeLines: [ { html: 'Ingress TLS pulls the cert + key from a <span class="fn">_BLANK_</span>.' } ],
              tokens: ['Secret', 'ConfigMap', 'PersistentVolume', 'CRD'], correctAnswer: 'Secret',
              explanation: '<code>tls.secretName</code> references a Secret of type <code>kubernetes.io/tls</code>.' },
            { type: 'output-predict', prompt: 'You created an Ingress but get <em>404 default backend</em> when curling. Most likely cause?',
              code: `<span class="fn">$</span> curl https://api.example.com/`,
              options: [
                'Cluster DNS is broken',
                'No Ingress controller is installed (or the rule does not match the host)',
                'The Pod crashed',
                'etcd lost data'
              ],
              correct: 1, explanation: '404 default backend = the controller is there but no rule matched — or the host header doesn\'t match.' }
          ]
        }
      ]
    },

    /* ============== UNIT 7 — Config & Secrets ============== */
    {
      id: 'k8s-u7', name: 'Unit 7 · ConfigMaps & Secrets', description: 'Externalize config and credentials',
      lessons: [
        {
          id: 'k8s-u7-l1', name: 'Config without rebuilds', icon: '🔐', xp: 20,
          challenges: [
            { type: 'concept', title: 'Code in image. Config outside.', content: `<p>You should <em>never</em> bake environment-specific config into a container image. Use <strong>ConfigMaps</strong> for non-secret config and <strong>Secrets</strong> for credentials.</p>
<div class="code-block"><span class="kw">apiVersion:</span> v1
<span class="kw">kind:</span> ConfigMap
<span class="kw">metadata:</span> { name: app-config }
<span class="kw">data:</span>
  LOG_LEVEL: info
  CACHE_TTL: <span class="str">"60"</span></div>
<p>You can mount them two ways:</p>
<ul>
<li><strong>As env vars</strong> — simple, but a config change requires Pod restart</li>
<li><strong>As files</strong> via a volume — supports live update for some apps</li>
</ul>
<p>Secrets look the same but values are base64-encoded and ideally encrypted at rest in etcd. <strong>Base64 is not encryption</strong> — anyone with read access decodes trivially.</p>` },
            { type: 'true-false', statement: 'Secrets in K8s are encrypted by default, so they\'re safe to share around the cluster.', correct: false, explanation: 'Secrets are base64-encoded, not encrypted. Encryption at rest needs to be explicitly enabled, and RBAC controls who can read them.' },
            { type: 'match-pairs', prompt: 'Match value type → resource.', leftLabel: 'Value', rightLabel: 'Best stored in',
              pairs: [
                { left: 'Database password', right: 'Secret' },
                { left: 'Log level', right: 'ConfigMap' },
                { left: 'API base URL', right: 'ConfigMap' },
                { left: 'TLS private key', right: 'Secret' }
              ] },
            { type: 'multiple-choice', prompt: 'Best way to share a config that the app expects as <code>/etc/app/config.json</code>?',
              options: [
                { text: 'Hardcode it into the image', code: false },
                { text: 'Mount a ConfigMap as a file in a volume', code: false },
                { text: 'Pass as env var', code: false },
                { text: 'Store in etcd directly', code: false }
              ],
              correct: 1, explanation: 'A ConfigMap volume mounts each key as a file path.' },
            { type: 'fill-blank', prompt: 'Create a generic Secret from literal key=value:',
              codeLines: [ { html: '<span class="fn">$</span> kubectl create secret <span class="fn">_BLANK_</span> db --from-literal=password=s3cr3t' } ],
              tokens: ['generic', 'tls', 'docker-registry', 'opaque'], correctAnswer: 'generic',
              explanation: '<code>generic</code> is the type for arbitrary literals/files. <code>opaque</code> is the data type, not the CLI subcommand.' },
            { type: 'output-predict', prompt: 'You mounted a ConfigMap as a volume. The mount path contains:',
              code: `<span class="fn">$</span> ls /etc/app-config/`,
              options: [
                'Just a single file with the YAML',
                'One file per key, with the value as the contents',
                'An empty directory',
                'The raw etcd binary data'
              ],
              correct: 1, explanation: 'Each key in <code>data:</code> becomes a file. Value = file contents.' }
          ]
        }
      ]
    },

    /* ============== UNIT 8 — Volumes & PV ============== */
    {
      id: 'k8s-u8', name: 'Unit 8 · Volumes & PersistentVolumes', description: 'Storage that survives Pod restarts',
      lessons: [
        {
          id: 'k8s-u8-l1', name: 'PV, PVC, StorageClass', icon: '💾', xp: 25,
          challenges: [
            { type: 'concept', title: 'Pods are ephemeral. Data shouldn\'t be.', content: `<p>When a Pod dies, its writable container filesystem dies with it. For anything that needs to outlive a restart, attach a volume.</p>
<div class="code-block"><span class="kw">emptyDir</span>      — scratch space, dies with the Pod
<span class="kw">hostPath</span>      — node-local; dangerous for portability
<span class="kw">configMap</span>     — files from a ConfigMap
<span class="kw">secret</span>        — files from a Secret
<span class="kw">PVC</span>           — claim on cluster storage (the durable option)</div>
<p>The big trio for durable storage:</p>
<ul>
<li><strong>PersistentVolume (PV)</strong> — actual storage (a disk, NFS share, cloud block volume)</li>
<li><strong>PersistentVolumeClaim (PVC)</strong> — a request: "I need 10 GiB, ReadWriteOnce"</li>
<li><strong>StorageClass</strong> — a template that <em>dynamically</em> provisions a PV when a PVC asks for one</li>
</ul>` },
            { type: 'match-pairs', prompt: 'Match storage object → who creates it.', leftLabel: 'Object', rightLabel: 'Created by',
              pairs: [
                { left: 'PV', right: 'Admin (or dynamically by StorageClass)' },
                { left: 'PVC', right: 'App developer' },
                { left: 'StorageClass', right: 'Cluster admin' },
                { left: 'emptyDir', right: 'Pod itself' }
              ] },
            { type: 'reorder-code', prompt: 'Order the dynamic provisioning flow.',
              lines: [
                'User creates a PVC referencing a StorageClass',
                'The provisioner sees the unbound PVC and creates a matching PV',
                'K8s binds the PVC to the new PV',
                'The Pod\'s volume mounts the bound PVC'
              ],
              correctOrder: [0, 1, 2, 3],
              explanation: 'PVC → provisioner → PV → bind → mount.' },
            { type: 'multiple-choice', prompt: 'Which access mode means "one node, read-write"?',
              options: [
                { text: 'ReadWriteMany (RWX)', code: true },
                { text: 'ReadOnlyMany (ROX)', code: true },
                { text: 'ReadWriteOnce (RWO)', code: true },
                { text: 'ReadWriteOncePod (RWOP)', code: true }
              ],
              correct: 2, explanation: 'RWO = mountable by exactly one node at a time. Common for cloud block volumes (EBS, GCE PD).' },
            { type: 'true-false', statement: 'When a Pod that uses a PVC is deleted, the PV (and its data) is also deleted by default.', correct: false, explanation: 'PV lifecycle is independent of the Pod. Default reclaim policy keeps data until the PVC itself is deleted (and even then can be Retain).' },
            { type: 'fill-blank', prompt: 'Pick the field that tells K8s what kind of storage you want.',
              codeLines: [ { html: 'A PVC requests a class of storage via <span class="fn">_BLANK_</span>.' } ],
              tokens: ['storageClassName', 'storageType', 'volumeType', 'pvName'], correctAnswer: 'storageClassName',
              explanation: '<code>spec.storageClassName</code> picks which StorageClass to use.' }
          ]
        }
      ]
    },

    /* ============== UNIT 9 — Namespaces & RBAC ============== */
    {
      id: 'k8s-u9', name: 'Unit 9 · Namespaces & RBAC', description: 'Multi-tenancy and access control',
      lessons: [
        {
          id: 'k8s-u9-l1', name: 'Slicing the cluster', icon: '🪪', xp: 25,
          challenges: [
            { type: 'concept', title: 'Namespaces are virtual sub-clusters', content: `<p>A <strong>Namespace</strong> partitions a cluster. Resources in different namespaces can share names (you can have a <code>web</code> Deployment in both <code>dev</code> and <code>prod</code>). It\'s the unit of:</p>
<ul>
<li>name scoping</li>
<li>RBAC (most permissions are namespace-scoped)</li>
<li>resource quotas + LimitRanges</li>
<li>network policies</li>
</ul>
<div class="code-block"><span class="fn">$</span> kubectl create ns prod
<span class="fn">$</span> kubectl get pods -n prod</div>
<p><strong>RBAC</strong> (Role-Based Access Control) decides who can do what:</p>
<div class="code-block"><span class="kw">Role</span>             — namespaced permissions
<span class="kw">ClusterRole</span>      — cluster-wide permissions
<span class="kw">RoleBinding</span>      — binds a Role to a user/group/ServiceAccount in one ns
<span class="kw">ClusterRoleBinding</span> — binds a ClusterRole cluster-wide</div>` },
            { type: 'match-pairs', prompt: 'Match RBAC object → scope.', leftLabel: 'Object', rightLabel: 'Scope',
              pairs: [
                { left: 'Role', right: 'Single namespace' },
                { left: 'ClusterRole', right: 'Whole cluster' },
                { left: 'RoleBinding', right: 'Binds within one namespace' },
                { left: 'ClusterRoleBinding', right: 'Binds cluster-wide' }
              ] },
            { type: 'multiple-choice', prompt: 'Pods talk to the API server using a:',
              options: [
                { text: 'User account', code: false },
                { text: 'ServiceAccount', code: false },
                { text: 'kubeconfig file', code: false },
                { text: 'TLS client cert that the kubelet signs', code: false }
              ],
              correct: 1, explanation: 'Every Pod is automatically assigned a ServiceAccount (default if not specified). RBAC bindings on the SA decide what the Pod can do.' },
            { type: 'true-false', statement: 'A RoleBinding can bind a ClusterRole — but only within one namespace.', correct: true, explanation: 'Useful for re-using a ClusterRole\'s permission set scoped to one namespace.' },
            { type: 'fill-blank', prompt: 'List Pods in the <code>kube-system</code> namespace:',
              codeLines: [ { html: '<span class="fn">$</span> kubectl get pods <span class="fn">_BLANK_</span> kube-system' } ],
              tokens: ['-n', '--ns', '--namespace=', '-N'], correctAnswer: '-n',
              explanation: '<code>-n &lt;ns&gt;</code> (short for <code>--namespace</code>) selects the namespace.' },
            { type: 'output-predict', prompt: 'You have NO permissions in <code>prod</code>. <code>kubectl get pods -n prod</code> prints:',
              code: `<span class="fn">$</span> kubectl get pods -n prod`,
              options: [
                'No resources found in prod namespace.',
                'Error from server (Forbidden): pods is forbidden',
                'A list of all pods in default',
                'The cluster crashes'
              ],
              correct: 1, explanation: 'No RBAC = Forbidden. (Note: if you have no resources but DO have permission, you get "No resources found".)' }
          ]
        }
      ]
    },

    /* ============== UNIT 10 — StatefulSets & DaemonSets ============== */
    {
      id: 'k8s-u10', name: 'Unit 10 · StatefulSets & DaemonSets', description: 'Stable identity, one-per-node',
      lessons: [
        {
          id: 'k8s-u10-l1', name: 'When Deployment isn\'t enough', icon: '🗄️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Stateful identity vs node-local agents', content: `<p>Deployments treat Pods as <em>identical and replaceable</em>. Some workloads can\'t live with that:</p>
<div class="code-block"><span class="kw">StatefulSet</span> — for databases, Kafka, etc.
  • Pods get stable names: app-0, app-1, app-2
  • Stable storage: each Pod gets its own PVC
  • Ordered start/stop: app-0 ready before app-1 starts

<span class="kw">DaemonSet</span>   — runs ONE Pod on EVERY node (or matching nodes)
  • Use for log collectors, metric agents, CNI/CSI plugins
  • New node joins → DaemonSet auto-schedules a Pod there</div>` },
            { type: 'match-pairs', prompt: 'Match workload → best controller.', leftLabel: 'Workload', rightLabel: 'Controller',
              pairs: [
                { left: 'Stateless REST API', right: 'Deployment' },
                { left: 'PostgreSQL cluster', right: 'StatefulSet' },
                { left: 'Per-node log agent', right: 'DaemonSet' },
                { left: 'Nightly batch job', right: 'CronJob' }
              ] },
            { type: 'multiple-choice', prompt: 'A StatefulSet of 3 replicas is created. The Pod names will be:',
              options: [
                { text: 'app-a1b2, app-c3d4, app-e5f6', code: true },
                { text: 'app-0, app-1, app-2', code: true },
                { text: 'app-1, app-2, app-3', code: true },
                { text: 'app, app-2, app-3', code: true }
              ],
              correct: 1, explanation: 'StatefulSets use <code>&lt;name&gt;-&lt;ordinal&gt;</code> starting at 0.' },
            { type: 'true-false', statement: 'Adding a new node to the cluster will cause a DaemonSet to schedule a Pod on it.', correct: true, explanation: 'That\'s the entire point of a DaemonSet — one Pod per matching node.' },
            { type: 'output-predict', prompt: '<code>kubectl get pods -l app=db</code> for a 3-replica StatefulSet shows:',
              code: `<span class="fn">$</span> kubectl get pods -l app=db`,
              options: [
                'db-0  db-1  db-2',
                'db-abc  db-xyz  db-pqr',
                '3 pods all named "db"',
                'Just one Pod'
              ],
              correct: 0, explanation: 'Predictable, ordinal-suffixed names.' },
            { type: 'fill-blank', prompt: 'Which built-in DNS pattern reaches a specific StatefulSet pod?',
              codeLines: [ { html: '<span class="str">&lt;podname&gt;.&lt;</span><span class="fn">_BLANK_</span><span class="str">&gt;.&lt;ns&gt;.svc.cluster.local</span>' } ],
              tokens: ['headless-service', 'cluster-ip', 'load-balancer', 'ingress'], correctAnswer: 'headless-service',
              explanation: 'StatefulSets pair with a headless Service (clusterIP: None) to give each Pod its own DNS name.' }
          ]
        }
      ]
    },

    /* ============== UNIT 11 — Jobs & CronJobs ============== */
    {
      id: 'k8s-u11', name: 'Unit 11 · Jobs & CronJobs', description: 'Batch and scheduled work',
      lessons: [
        {
          id: 'k8s-u11-l1', name: 'Run-to-completion workloads', icon: '⏱️', xp: 20,
          challenges: [
            { type: 'concept', title: 'Jobs run once. CronJobs run on a schedule.', content: `<p>Deployments keep Pods <em>running forever</em>. For one-off or scheduled work, use:</p>
<div class="code-block"><span class="kw">Job</span>      — runs a Pod until it succeeds, then stops
            • optional parallelism + completions
            • retries on failure (backoffLimit)

<span class="kw">CronJob</span>  — creates Jobs on a cron schedule
            schedule: <span class="str">"0 2 * * *"</span>   <span class="com"># 2am daily</span></div>
<p>Classic use cases: db migrations, nightly reports, cleanup, ML batch inference.</p>` },
            { type: 'match-pairs', prompt: 'Match cron expression → meaning.', leftLabel: 'Cron', rightLabel: 'Means',
              pairs: [
                { left: '*/5 * * * *', right: 'Every 5 minutes' },
                { left: '0 * * * *', right: 'Top of every hour' },
                { left: '0 2 * * *', right: '2:00 AM daily' },
                { left: '0 0 * * 0', right: 'Midnight on Sundays' }
              ] },
            { type: 'multiple-choice', prompt: 'A Job has <code>completions: 5, parallelism: 2</code>. What happens?',
              options: [
                { text: '5 Pods run all at once', code: false },
                { text: 'Up to 2 Pods run in parallel until 5 succeed total', code: false },
                { text: 'It runs 5 times sequentially', code: false },
                { text: 'It cancels after 2 successes', code: false }
              ],
              correct: 1, explanation: 'At most 2 Pods at a time, finishing once 5 succeeded.' },
            { type: 'true-false', statement: 'A CronJob that misses its scheduled run because the controller was down will <em>by default</em> backfill all missed runs.', correct: false, explanation: 'By default <code>startingDeadlineSeconds</code> limits backfill, and <code>concurrencyPolicy</code> can prevent overlaps. Behavior is configurable but not "always backfill".' },
            { type: 'fill-blank', prompt: 'CronJob schedule for "every Sunday at 03:30":',
              codeLines: [ { html: '<span class="kw">schedule:</span> <span class="str">"<span class="fn">_BLANK_</span>"</span>' } ],
              tokens: ['30 3 * * 0', '3 30 * * 0', '0 0 * * 0', '30 3 0 0 *'], correctAnswer: '30 3 * * 0',
              explanation: 'cron is <code>min hour dom mon dow</code>. 30 3 * * 0 = 03:30 every Sunday (dow 0).' },
            { type: 'output-predict', prompt: 'After a CronJob has fired several times, <code>kubectl get jobs</code> shows:',
              code: `<span class="fn">$</span> kubectl get jobs`,
              options: [
                'Just the active Job, if any',
                'One row per past Job run (subject to history limits)',
                'A list of cron timestamps',
                'The CronJob YAML'
              ],
              correct: 1, explanation: '<code>successfulJobsHistoryLimit</code> and <code>failedJobsHistoryLimit</code> control how many old Jobs are kept.' }
          ]
        }
      ]
    },

    /* ============== UNIT 12 — Probes & autoscaling ============== */
    {
      id: 'k8s-u12', name: 'Unit 12 · Probes & autoscaling', description: 'Health checks and HPA',
      lessons: [
        {
          id: 'k8s-u12-l1', name: 'Liveness, readiness, startup', icon: '🫀', xp: 25,
          challenges: [
            { type: 'concept', title: 'Three probes, three meanings', content: `<p>K8s asks each container: are you alive? are you ready for traffic? are you done booting?</p>
<div class="code-block"><span class="kw">livenessProbe</span>   — failing = restart the container
<span class="kw">readinessProbe</span>  — failing = pull from Service load balancer
<span class="kw">startupProbe</span>    — gates the other two during slow startup</div>
<p>All three can be HTTP, TCP, gRPC, or exec.</p>
<div class="code-block"><span class="kw">readinessProbe:</span>
  <span class="kw">httpGet:</span>
    <span class="kw">path:</span> /healthz
    <span class="kw">port:</span> <span class="num">8080</span>
  <span class="kw">periodSeconds:</span> <span class="num">5</span>
  <span class="kw">failureThreshold:</span> <span class="num">3</span></div>` },
            { type: 'match-pairs', prompt: 'Match probe → consequence of failing.', leftLabel: 'Probe', rightLabel: 'Consequence',
              pairs: [
                { left: 'liveness', right: 'Container is restarted' },
                { left: 'readiness', right: 'Pod removed from Service endpoints' },
                { left: 'startup', right: 'Other probes deferred until it passes' },
                { left: 'none', right: 'K8s assumes always healthy' }
              ] },
            { type: 'multiple-choice', prompt: 'Your app boots slowly (60s). Which probe protects it from being killed mid-boot?',
              options: [
                { text: 'liveness', code: false },
                { text: 'readiness', code: false },
                { text: 'startup', code: false },
                { text: 'none of the above', code: false }
              ],
              correct: 2, explanation: 'startupProbe disables the other probes until it succeeds — perfect for slow boots.' },
            { type: 'true-false', statement: 'Setting only a livenessProbe (no readinessProbe) means a Pod will receive traffic the moment it starts.', correct: true, explanation: 'Without readinessProbe, K8s assumes ready as soon as container starts — risky for warmup-heavy apps.' },
            { type: 'concept', title: 'HPA — autoscale by CPU/memory/custom', content: `<p>The <strong>Horizontal Pod Autoscaler (HPA)</strong> watches a metric and scales replicas between min/max.</p>
<div class="code-block"><span class="fn">$</span> kubectl autoscale deploy web <span class="kw">\\</span>
    --cpu-percent=<span class="num">70</span> --min=<span class="num">2</span> --max=<span class="num">10</span></div>
<p>K8s also has the <strong>VerticalPodAutoscaler</strong> (resize CPU/memory of existing Pods) and the <strong>Cluster Autoscaler</strong> (add/remove nodes). HPA needs the <em>metrics-server</em> running.</p>` },
            { type: 'output-predict', prompt: 'CPU on your Pods is averaging 90% and HPA is configured at target 70% with max=10. What does HPA do?',
              code: `<span class="com"># target CPU 70%, current 90%, replicas=4, max=10</span>`,
              options: [
                'Scales down to save resources',
                'Scales up toward more replicas (limited by max)',
                'Does nothing — CPU is fine',
                'Restarts the Pods'
              ],
              correct: 1, explanation: 'Current usage > target → desired = ceil(currentReplicas × currentMetric / target). HPA adds Pods.' },
            { type: 'fill-blank', prompt: 'Which service must run for HPA to read CPU/memory metrics?',
              codeLines: [ { html: 'HPA reads CPU and memory from the <span class="fn">_BLANK_</span> add-on.' } ],
              tokens: ['metrics-server', 'kube-state-metrics', 'prometheus', 'cadvisor'], correctAnswer: 'metrics-server',
              explanation: 'metrics-server exposes the resource metrics API HPA consumes. Prometheus + the adapter is for custom metrics.' }
          ]
        }
      ]
    },

    /* ============== UNIT 13 — kubectl essentials ============== */
    {
      id: 'k8s-u13', name: 'Unit 13 · kubectl essentials', description: 'The Swiss Army knife of K8s',
      lessons: [
        {
          id: 'k8s-u13-l1', name: 'Day-to-day kubectl', icon: '🛠️', xp: 25,
          challenges: [
            { type: 'concept', title: 'Eight commands you\'ll use 90% of the time', content: `<div class="code-block"><span class="fn">kubectl get</span>           — list resources (use -o wide / -o yaml)
<span class="fn">kubectl describe</span>      — full details + events for one resource
<span class="fn">kubectl apply -f</span>      — declarative create/update from YAML
<span class="fn">kubectl logs</span>          — fetch container logs (-f to follow, -p previous)
<span class="fn">kubectl exec -it</span>      — open a shell inside a container
<span class="fn">kubectl port-forward</span>  — tunnel local port → Pod port (debug)
<span class="fn">kubectl delete</span>        — remove a resource
<span class="fn">kubectl explain</span>       — built-in schema docs (no internet needed)</div>` },
            { type: 'match-pairs', prompt: 'Match kubectl verb → use.', leftLabel: 'Command', rightLabel: 'Use',
              pairs: [
                { left: 'kubectl logs', right: 'See container output' },
                { left: 'kubectl describe', right: 'Inspect events + status' },
                { left: 'kubectl exec', right: 'Open a shell in a Pod' },
                { left: 'kubectl port-forward', right: 'Tunnel local port to Pod' }
              ] },
            { type: 'multiple-choice', prompt: 'Pod is in CrashLoopBackOff. Best first move?',
              options: [
                { text: 'kubectl delete pod', code: true },
                { text: 'kubectl logs &lt;pod&gt; --previous', code: true },
                { text: 'kubectl edit deployment', code: true },
                { text: 'kubectl restart', code: true }
              ],
              correct: 1, explanation: 'Read the logs of the previous (failed) container to learn why it crashed.' },
            { type: 'true-false', statement: '<code>kubectl apply -f file.yaml</code> is declarative — running it twice with the same file produces the same end state.', correct: true, explanation: 'Idempotent. That\'s the whole point of declarative.' },
            { type: 'fill-blank', prompt: 'Stream logs from a Pod\'s "web" container, following new output:',
              codeLines: [ { html: '<span class="fn">$</span> kubectl logs <span class="fn">_BLANK_</span> pod/demo -c web' } ],
              tokens: ['-f', '-t', '--stream', '--tail'], correctAnswer: '-f',
              explanation: '<code>-f</code> follows like <code>tail -f</code>. <code>--tail=N</code> just shows last N lines.' },
            { type: 'output-predict', prompt: 'What does this typically print?',
              code: `<span class="fn">$</span> kubectl get pod nginx -o jsonpath='{.status.phase}'`,
              options: ['Running', 'Pending', 'Succeeded', 'A Phase string like Running / Pending / Succeeded'],
              correct: 3, explanation: 'It prints whichever phase the Pod is in. Common values: Running, Pending, Succeeded, Failed.' },
            { type: 'tap-tokens', prompt: 'Build a port-forward command that maps local 8080 → Pod web port 80.',
              tokens: ['kubectl', 'port-forward', 'pod/demo', '8080:80', 'svc/demo', 'expose', '-p'],
              correctOrder: ['kubectl', 'port-forward', 'pod/demo', '8080:80'],
              explanation: '<code>kubectl port-forward &lt;target&gt; local:remote</code>.' }
          ]
        }
      ]
    },

    /* ============== UNIT 14 — Helm ============== */
    {
      id: 'k8s-u14', name: 'Unit 14 · Helm intro', description: 'Charts, templates, values, releases',
      lessons: [
        {
          id: 'k8s-u14-l1', name: 'Helm in 10 minutes', icon: '⛵', xp: 20,
          challenges: [
            { type: 'concept', title: 'A package manager for K8s YAML', content: `<p>Once you have 20 YAMLs per app per environment, copy-pasting gets old. <strong>Helm</strong> packages them into <strong>charts</strong>: parameterized templates rendered with a <code>values.yaml</code>.</p>
<div class="code-block">myapp/
├── Chart.yaml          <span class="com"># name, version</span>
├── values.yaml         <span class="com"># default knobs</span>
└── templates/          <span class="com"># Go-templated YAML</span>
    ├── deployment.yaml
    └── service.yaml</div>
<p>Templates use the Go <code>{{ }}</code> syntax:</p>
<div class="code-block"><span class="kw">apiVersion:</span> apps/v1
<span class="kw">kind:</span> Deployment
<span class="kw">metadata:</span>
  <span class="kw">name:</span> {{ .Release.Name }}-web
<span class="kw">spec:</span>
  <span class="kw">replicas:</span> {{ .Values.replicaCount }}</div>
<p>A <strong>release</strong> is a chart installed into a cluster. You can have many releases of the same chart.</p>` },
            { type: 'match-pairs', prompt: 'Match Helm term → meaning.', leftLabel: 'Term', rightLabel: 'Meaning',
              pairs: [
                { left: 'Chart', right: 'Packaged set of templates' },
                { left: 'Release', right: 'An installed instance of a chart' },
                { left: 'Repository', right: 'A place to host charts' },
                { left: 'Values', right: 'User-supplied parameters' }
              ] },
            { type: 'multiple-choice', prompt: 'Install nginx-ingress with custom replica count?',
              options: [
                { text: 'helm install ingress nginx --replicas=3', code: true },
                { text: 'helm install ingress nginx-ingress/nginx --set controller.replicaCount=3', code: true },
                { text: 'helm install ingress nginx-ingress/nginx --replicas=3 --override', code: true },
                { text: 'kubectl scale chart', code: true }
              ],
              correct: 1, explanation: '<code>--set key=value</code> overrides chart values. Or pass <code>-f my-values.yaml</code>.' },
            { type: 'true-false', statement: '<code>helm upgrade</code> creates a new release; the old one is deleted.', correct: false, explanation: 'It bumps the release\'s revision. Use <code>helm rollback</code> to go back to a previous revision.' },
            { type: 'fill-blank', prompt: 'Roll back release "web" to revision 2:',
              codeLines: [ { html: '<span class="fn">$</span> helm <span class="fn">_BLANK_</span> web 2' } ],
              tokens: ['rollback', 'undo', 'revert', 'downgrade'], correctAnswer: 'rollback',
              explanation: '<code>helm rollback &lt;release&gt; &lt;revision&gt;</code>.' },
            { type: 'output-predict', prompt: '<code>helm list</code> shows what?',
              code: `<span class="fn">$</span> helm list`,
              options: [
                'All available charts in repositories',
                'Releases installed in the current namespace',
                'All Pods in the cluster',
                'Helm config files'
              ],
              correct: 1, explanation: 'Releases in the current namespace by default. Add <code>-A</code> for all namespaces.' }
          ]
        }
      ]
    },

    /* ============== UNIT 15 — Observability & troubleshooting ============== */
    {
      id: 'k8s-u15', name: 'Unit 15 · Observability & troubleshooting', description: 'Events, logs, and common failure modes',
      lessons: [
        {
          id: 'k8s-u15-l1', name: 'Reading the cluster', icon: '🔍', xp: 25,
          challenges: [
            { type: 'concept', title: 'When something is wrong, look at Events first', content: `<p>The single most useful trick: <code>kubectl describe pod &lt;name&gt;</code> and scroll to the <strong>Events</strong> section at the bottom. It tells you what the scheduler/kubelet/runtime is complaining about.</p>
<div class="code-block"><span class="fn">$</span> kubectl describe pod web-7b...
...
Events:
  Type     Reason     Message
  ----     ------     -------
  Warning  Failed     Failed to pull image "nginx:bogus": not found
  Warning  BackOff    Back-off pulling image "nginx:bogus"</div>` },
            { type: 'match-pairs', prompt: 'Match failure mode → cause.', leftLabel: 'STATUS', rightLabel: 'Likely cause',
              pairs: [
                { left: 'CrashLoopBackOff', right: 'App exits/crashes; container restarts repeatedly' },
                { left: 'ImagePullBackOff', right: 'Bad image name, tag, or missing pull credentials' },
                { left: 'Pending', right: 'No node has enough resources / matching constraints' },
                { left: 'OOMKilled', right: 'Container exceeded memory limit' }
              ] },
            { type: 'multiple-choice', prompt: 'Pod is stuck in <code>Pending</code>. Most likely cause?',
              options: [
                { text: 'Image pull failed', code: false },
                { text: 'No node has enough CPU/memory or a taint blocks it', code: false },
                { text: 'App crashed at boot', code: false },
                { text: 'Service has no endpoints', code: false }
              ],
              correct: 1, explanation: 'Pending = the scheduler hasn\'t assigned a node yet. Resources or unmatched node selector / taints are the usual suspects.' },
            { type: 'true-false', statement: '<code>ImagePullBackOff</code> means the image was pulled but failed to run.', correct: false, explanation: 'It means the pull <em>itself</em> failed (typo in tag, private registry without imagePullSecrets, no internet from node).' },
            { type: 'output-predict', prompt: 'You see <code>OOMKilled</code> in a Pod\'s status. The container most likely needs:',
              code: `<span class="com"># Status: OOMKilled</span>`,
              options: [
                'A higher CPU request',
                'A higher memory limit (or a memory leak fix)',
                'A different image',
                'A LoadBalancer Service'
              ],
              correct: 1, explanation: 'Linux OOM killer hit the cgroup limit. Raise <code>resources.limits.memory</code>, or — better — find the leak.' },
            { type: 'reorder-code', prompt: 'Order a typical "Pod is sad" debugging session.',
              lines: [
                'kubectl get pods   <span class="com"># see STATUS</span>',
                'kubectl describe pod &lt;name&gt;   <span class="com"># read Events</span>',
                'kubectl logs &lt;name&gt; --previous   <span class="com"># last crash logs</span>',
                'kubectl exec -it &lt;name&gt; -- sh   <span class="com"># poke inside if running</span>'
              ],
              correctOrder: [0, 1, 2, 3],
              explanation: 'Status → Events → Logs → (Shell). Almost every cluster bug yields to this loop.' },
            { type: 'tap-tokens', prompt: 'Build a command that streams the last 100 log lines from the previous crash.',
              tokens: ['kubectl', 'logs', '--previous', '--tail=100', 'pod/web', 'describe', 'get', '-f', '-n'],
              correctOrder: ['kubectl', 'logs', '--previous', '--tail=100', 'pod/web'],
              explanation: '<code>--previous</code> gets logs from the prior container instance. <code>--tail=N</code> trims output.' }
          ]
        }
      ]
    }

  ]
});
