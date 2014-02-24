typedef pair<int, int> ii;
typedef vector<ii> vii;

void dfs(int u) {
  printf(" %d", u); 
  dfs_num[u] = DFS_BLACK;
  vii n = neighbours[u];
  for (vii::iterator v = n.begin(); v != n.end(); v++)
    if (dfs_num[v->first] == DFS_WHITE)
      dfs(v->first);
}



queue<int> q; 
map<int, int> dist;
q.push(s); 
dist[s] = 0;
while (!q.empty()) {
  int u = q.front(); q.pop(); // queue: layer by layer!
  printf("Visit %d, Layer %d\n", u, dist[u]);
  vii n = neighbours[u];
  for (vii::iterator v = n.begin(); v != n.end(); v++)
    if (!dist.count(v->first)) {
      dist[v->first] = dist[u] + 1; // if v not visited before + reachable from u
      q.push(v->first); // enqueue v for next steps
    }
}

vector<int> dist(V, INF); 
dist[s] = 0;
priority_queue<ii, vector<ii>, greater<ii> > pq; pq.push(ii(0, s)); 
while (!pq.empty()) {
  ii top = pq.top(); pq.pop();
  int d = top.first, u = top.second;
  if (d == dist[u])
    TRvii (AdjList[u], it) {
      int v = it->first, weight_u_v = it->second;
    if (dist[u] + weight_u_v < dist[v]) {
      dist[v] = dist[u] + weight_u_v;
      pq.push(ii(dist[v], v));
    } 
  } 
}