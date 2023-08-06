from django_hosts import patterns, host

host_patterns = patterns(
  '',
    host(r'', 'config.urls', name=' '),
    host(r'developers', 'developers.urls', name='developers'),
    host(r'productmanagers', 'productmanagers.urls', name='productmanagers'),
)
