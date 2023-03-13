function work(a, b) {
  alert(a + b);
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
  alert("call:" + args.join());
}
