namespace :fake do
  desc 'TODO'
  task createjob: :environment do
    Job.create_fake!
  end

  desc 'TODO'
  task createjobsd: :environment do
    loop do
      sleep Random.rand(5)
      Job.create_fake!
    end
  end
end
