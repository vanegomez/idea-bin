MagicLamp.fixture do
  Idea.create(title: 'first note', body: 'wowowowow')
  Idea.create(title: 'second note', body: 'wowowowow')
  render template: 'ideas/index'
end
