resource "local_file" "test_file" {
  count    = 10
  content  = "this is test file number ${count.index}"
  filename = "${path.module}/test_${count.index}.txt"
}